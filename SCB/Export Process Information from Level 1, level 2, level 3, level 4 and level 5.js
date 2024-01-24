/*==========================================================================================================
 Report Title Export Process Information from Level 1, level 2, level 3, level 4 and level 5
 Context Execute report from selected Level1 model only
 Outputformat Excel (xlsx)
 Function specification  List down the model's statis information as be shown in report template below
==========================================================================================================*/

//--------------Selected Language and the widthList-----------
var currentLocale = Context.getSelectedLanguage();

//---------ScriptName And the Output format selected----------
var scriptName = Context.getScriptInfo(Constants.SCRIPT_NAME);
var selectedFormat = Context.getSelectedFormat();
var selectedModel = ArisData.getSelectedModels()[0];
var outFileName = scriptName + .xls;

//---------------Global varibles definition--------------------
var oOutput = Context.createOutputObject(Context.getSelectedFormat(), outFileName);
var visitedModels = new Array;
var index = 0;
var currentProcessAttributes = new java.util.HashMap();
var modelNames = new Array;
//------------Required Header's in Report----------------------
var attributeKeys = [Level 1 Model Name (VACD),	Level 2 Model Name (VACD),	Level 3 Model Name (VACD),	Level 4 Model Name (VACD),	
    Level 5 Model Name (EPC), Number of events (EPC),	Number of function steps (EPC),	Num % of functional steps that are manual,	
    Num % of functional steps that are semi-automated, First level approver, Second level Approver, Modeler, Model Version, Escalation 2, 
Escalation 1, Model Status, Active review pattern, When is CR last released, Audit Trail];



//--------------------Main Function---------------------------

function main(){
    defineStyles(oOutput);
    
    oOutput.BeginTable(100, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT  Constants.FMT_REPEAT_HEADER, 0);
    oOutput.TableRow();
    oOutput.TableCell(Report Title ,1,0 , Arial, 16, Constants.C_OLIVE, Constants.C_WHITE, 0, Constants.FMT_BOLD  Constants.FMT_CENTER, 0);
    oOutput.TableCell(Context.getScriptInfo(Constants.SCRIPT_NAME),1, 5 , Arial, 16, Constants.C_BLACK, Constants.C_WHITE, 0, 
    Constants.FMT_BOLD  Constants.FMT_LEFT, 0);
    oOutput.TableRow();
    defineHeader(oOutput);
    
    oOutput.TableRow();
    goToNextLevel(selectedModel)
    oOutput.EndTable(First Report, 100, Database, 0, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_LEFT, 0);
    oOutput.WriteReport();
}

//----------------------Get into the next level------------------------------------------------------------
function goToNextLevel(currentModel){
    var currentModelName = currentModel.Name(currentLocale); Get the name of Current Model
    var objectDefList = currentModel.ObjDefList(); get Object Definition List of all objects present in Current Model
    visitedModels.push(currentModel);
    modelNames.push(currentModelName);
    for(var i = 0; i  objectDefList.length; i++){ 
        if(objectDefList[i].TypeNum() == 22){Loop over all the Object Definition of type function
            var object_Name = objectDefList[i].Name(currentLocale);
            var assigned_models = objectDefList[i].AssignedModels();
            for(var j = 0; j  assigned_models.length; j++){
                var assignedModelName =  assigned_models[j].Name(currentLocale);
                var assignedModelTypeNum = assigned_models[j].TypeNum();
                if(assignedModelTypeNum == 12 && checkVisited(assigned_models[j], visitedModels) == false){
                    currentModel = assigned_models[j];
                    goToNextLevel(currentModel);  
                }else if(assignedModelTypeNum == 13){   13 - Type number of EPC.
                    modelNames.push(assignedModelName);
                    displayModelNames(modelNames);
                    displayObjectCount(assigned_models[j]);
                    modelNames.pop(assignedModelName);
                    oOutput.TableRow();
                }
            }
        }
    }
}

//------------ Display Event and Functions Count-------------
function displayObjectCount(Level5model){
    var eventCount = Level5model.ObjDefListFilter(Constants.OT_EVT);
    var functionCount = Level5model.ObjDefListFilter(Constants.OT_FUNC);
    oOutput.TableCellF(eventCount.length, 30, TABLE_DATA);
    oOutput.TableCellF(functionCount.length, 30, TABLE_DATA);
    
    eventCount = null;
    functionCount = null;
    //--Will add the code for further attributes here only....----
    //
 //   object = Level5model.ObjDefList(Constants.OT_EVT);
 //   object = Level5model.ObjDefListFilter(Constants.OT_EVT);
    
    
}

//---------Check whether the model is already visited or not---------
function checkVisited(oOcc, oOccList) {
    for (i = 0; i  oOccList.length; i++) {
        if (oOcc.IsEqual(oOccList[i]))
            return true;
    }
    oOccList.push(oOcc);
    return false;
}    


//---- Display first five Column's( model names)----------------------
function displayModelNames(currentProcessAttributes){
    oOutput.TableRow();
    for(var i =0; i  currentProcessAttributes.length; i++){
        oOutput.TableCellF(currentProcessAttributes[i], 30, TABLE_DATA);
    }
}


//----- Get Process Attributes (EPClevel5  Attributes)------------
function getProcessAttributes(assigned_model, currentProcessAttributes){
    var all_Maintained_Attributes = assigned_model.AttrList(currentLocale); 
}


//------DEfining a header of an excel table
function defineHeader(oOutput){
    oOutput.TableCellF(Level 1 Model Name (VACD), 30, TABLE_HEAD);
    oOutput.TableCellF(Level 2 Model Name (VACD), 30, TABLE_HEAD);
    oOutput.TableCellF(Level 3 Model Name (VACD),30, TABLE_HEAD);
    oOutput.TableCellF(Level 4 Model Name (VACD),30, TABLE_HEAD);
    oOutput.TableCellF(Level 5 Model Name (EPC),30, TABLE_HEAD);
    oOutput.TableCellF(Number of events (EPC),30, TABLE_HEAD);
    oOutput.TableCellF(Number of function steps (EPC),30, TABLE_HEAD);
    oOutput.TableCellF(Num % of functional steps that are manual,30, TABLE_HEAD);
    oOutput.TableCellF(Num % of functional steps that are semi-automated,30, TABLE_HEAD);
    oOutput.TableCellF(Num % of functional steps that are automated,30, TABLE_HEAD);
    oOutput.TableCellF(First level approver,30, TABLE_HEAD);
    oOutput.TableCellF(Second level Approver,30, TABLE_HEAD);
    oOutput.TableCellF(Modeler,30, TABLE_HEAD);
    oOutput.TableCellF(Model Version,30, TABLE_HEAD);
    oOutput.TableCellF(Escalation 2,30, TABLE_HEAD);
    oOutput.TableCellF(Escalation 1,30, TABLE_HEAD);
    oOutput.TableCellF(Model Status,30, TABLE_HEAD);
    oOutput.TableCellF(Active review pattern,30, TABLE_HEAD);
    oOutput.TableCellF(When is CR last released,30, TABLE_HEAD);
    oOutput.TableCellF(Audit Trail,30, TABLE_HEAD);
}



/*--------------------------------------------------------------------------------------------------------
This Function CAlled defineStyles uses the output Object as parameter and It has almost five format defined 
namely
TEXT
TABLE_HEAD
TABLE_HEAD_RIGHT
TABLE_DATA and last one is 
ERROR
------------------------------------------------------------------------------------------------------------*/
function defineStyles(oOutput){
    oOutput.DefineF(TEXT, Arial, 9, Constants.C_DARK_BLUE, Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(TABLE_HEAD, Arial, 10, Constants.C_BLACK, Constants.C_AQUA, Constants.FMT_BOLD  Constants.FMT_CENTER  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(TABLE_HEAD_RIGHT, Arial, 10, Constants.C_BLACK, Constants.C_CYAN, Constants.FMT_BOLD  Constants.FMT_RIGHT  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(TABLE_DATA, Arial, 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(TABLE_DATA_RIGHT, Arial, 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_RIGHT  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(TABLE_DATA_CENTER, Arial, 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_CENTER  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF(ERROR, Arial, 12, Constants.C_RED, Constants.C_WHITE, Constants.FMT_LEFT  Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 1);
}

//-----------Call main function---------
main();  