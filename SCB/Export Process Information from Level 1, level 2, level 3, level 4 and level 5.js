//==========================================================================================================
// Report Title: Export Process Information from Level 1, level 2, level 3, level 4 and level 5
// Context: Execute report from selected Level1 model only
// Outputformat: Excel (xlsx)
// Function specification:  List down the model's statis information as be shown in report template below
//==========================================================================================================

//--------------Selected Language and the widthList---------------
var currentLocale = Context.getSelectedLanguage();

//---------ScriptName And the Output format selected---------------
var scriptName = Context.getScriptInfo(Constants.SCRIPT_NAME);
var selectedFormat = Context.getSelectedFormat();
var selectedModel = ArisData.getSelectedModels()[0];
var outFileName = scriptName + ".xlsx";

//---------------Global varibles definition-------------------------
var oOutput = Context.createOutputObject(Context.getSelectedFormat(), outFileName);
var visitedModels = new Array;
var levelCount = 1;
var currentProcessAttributes = new java.util.HashMap();
var modelNames = new Array;
//------------Required Header's in Report---------------------------
var attributeKeys = ["Level 1 Model Name (VACD)",	"Level 2 Model Name (VACD)",	"Level 3 Model Name (VACD)",	"Level 4 Model Name (VACD)",	
    "Level 5 Model Name (EPC)", "Number of events (EPC)",	"Number of function steps (EPC)",	"Num/ % of functional steps that are manual",	
    "Num/ % of functional steps that are semi-automated", "First Level Approver", "Second Level Approver", "Modeller", "Model Version", "Escalation 2", 
"Escalation 1", "Model status", "Active review pattern", "Since/On", "Audit Trail"];
// Update the "Audit Trail" attribute name in the attrbute key

/*--------------------Main Function---------------------------*/

function main(){
    defineStyles(oOutput);
    
    oOutput.BeginTable(100, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0);
    oOutput.TableRow();
    defineHeader(oOutput);
    
    //oOutput.TableRow();
    // oOutput.TableRow();
    //oOutput.TableCellF("", 30, "TABLE_DATA");
    goToNextLevel(selectedModel)
    oOutput.EndTable("First Report", 100, "Database", 0, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_LEFT, 0);
    oOutput.WriteReport();
}

//----------------------Get into the next level------------------------------------------------------------
function goToNextLevel(currentModel){
    var currentModelName = currentModel.Name(currentLocale);// Get the name of Current Model
    var objectDefList = currentModel.ObjDefListByTypes([22]);// get Object Definition List of all objects present in Current Model
    visitedModels.push(currentModel);
    modelNames.push(currentModelName);
    for(var i = 0; i < objectDefList.length; i++){ 
        var object_Name = objectDefList[i].Name(currentLocale);
        var assigned_models = objectDefList[i].AssignedModels([12, 13]);
        for(var j = 0; j < assigned_models.length; j++){
            var assignedModelName =  assigned_models[j].Name(currentLocale);
            var assignedModelTypeNum = assigned_models[j].TypeNum();
            if(assignedModelTypeNum == 12 && checkVisited(assigned_models[j], visitedModels) == false){
                currentModel = assigned_models[j];
                levelCount++;
                if(levelCount < 6 )goToNextLevel(currentModel);
                    modelNames.pop(currentModel.Name(currentLocale));
                    levelCount--;
            }else if((assignedModelTypeNum == 13) && (levelCount == 4)){  // 13 - Type number of EPC.(// && count == 5)
                modelNames.push(assignedModelName);
                displayModelNames(modelNames);
                displayObjectCount(assigned_models[j]);
                displayAPGAttributes(assigned_models[j]);
                modelNames.pop(assignedModelName);
            }
        }   
    }
}

//------------ Display Event and Functions Count-------------
function displayObjectCount(Level5model){
    //var modelName = Level5model.Name(currentLocale);
    
    var events = Level5model.ObjDefListFilter(Constants.OT_EVT);
    var functions = Level5model.ObjDefListFilter(Constants.OT_FUNC);
    //var functionCount = Level5model.
    var ProcessIntegraces = Level5model.ObjDefListBySymbols([94]);// to exclude the Process interfaces from the model (94 - Symbol type number of an PI)
    var functionsCount = functions.length-ProcessIntegraces.length;
    
    oOutput.TableCellF(events.length, 30, "TABLE_DATA");
    oOutput.TableCellF(functionsCount, 30, "TABLE_DATA");
    
    eventCount = null;
    
    var automated =0 ;
    var semi_Automated = 0;
    var manual = 0;
    var automated_per = 0;
    var semi_Automated_per = 0;
    var manual_per = 0;
    for(var i= 0; i < functions.length; i++){
        var Automation_status = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("82d1a960-7275-11ea-122e-0050569c269e");
        var funcAttributes = functions[i].AttrList(currentLocale, [Automation_status]); 
        if(funcAttributes.length > 0){
            var AttValue = funcAttributes[0].getValue();
            if(AttValue == "Manual")manual++;
            else if(AttValue == "Automated")automated++;
            else semi_Automated++;
        }
    }
    
    var automated_per = (automated/functionsCount)*100;
    var semi_Automated_per = (semi_Automated/functionsCount)*100;
    var manual_per = (manual/functionsCount)*100 ;
    
    oOutput.TableCellF(manual, 15, "TABLE_DATA");
    oOutput.TableCellF(manual_per.toFixed(2).toString(), 30, "TABLE_DATA");
    oOutput.TableCellF(semi_Automated, 15, "TABLE_DATA");
    oOutput.TableCellF(semi_Automated_per.toFixed(2), 30, "TABLE_DATA");
    oOutput.TableCellF(automated, 15, "TABLE_DATA");
    oOutput.TableCellF(automated_per.toFixed(2), 30, "TABLE_DATA");
}

function displayAPGAttributes(Level5model){
    var ModelName = Level5model.Name(currentLocale);
    var apgAtt = new java.util.HashMap();
    var First_level_approver_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("3771d201-e82d-11ea-360f-645d867be5df");
    var Second_level_Approver_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("4001bed1-e82d-11ea-360f-645d867be5df");
    var Modeller_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("4af4a1e1-e82d-11ea-360f-645d867be5df");
    var Model_Version_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("2dcb4fa0-e82e-11ea-360f-645d867be5df");
    var Escalation_2_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("2781b6b1-f41e-11ea-360f-645d867be5df");
    var Escalation_1_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("1fa27c40-f41e-11ea-360f-645d867be5df");
    // var Audit_Trail_TN = ArisData.ActiveFilter().UserDefinedAttributeTypeNum("Audit-trail_GUID");
    
    // Add Audit_Trail_TN at last index of Parameter array of AttrLIst...
    var APG_Attributes = Level5model.AttrList(currentLocale, [First_level_approver_TN, Second_level_Approver_TN, Modeller_TN, Model_Version_TN, 
    Escalation_2_TN, Escalation_1_TN, 3793, 3801, 382]);
    for(var i = 0; i < APG_Attributes.length; i++){
        var attrName = APG_Attributes[i].Type();
        var attrValue = APG_Attributes[i].getValue();  
        apgAtt.put(attrName, attrValue);
    }
//---------Display APG Attributes...---------
    for(var a = 9; a < attributeKeys.length; a++){
        attrValue = apgAtt.get(attributeKeys[a]);
        oOutput.TableCellF(attrValue, 30, "TABLE_DATA");
    }
}


//---------Check whether the model is already visited or not---------
function checkVisited(model, modellist) {
    for (i = 0; i < modellist.length; i++) {
        if (model.IsEqual(modellist[i]))
            return true;
    }
    modellist.push(model);
    return false;
}    


//---- Display first five Column's( model names)----------------------
function displayModelNames(modelNames){
    oOutput.TableRow();
    for(var i =0; i < modelNames.length; i++){
        oOutput.TableCellF(modelNames[i], 30, "TABLE_DATA");
    }
}

//------Defining a header of an excelsheet-------
function defineHeader(oOutput){
    oOutput.TableRow();
    oOutput.TableCellF("Level 1 Model Name (VACD)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Level 2 Model Name (VACD)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Level 3 Model Name (VACD)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Level 4 Model Name (VACD)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Level 5 Model Name (EPC)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Number of events (EPC)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Number of function steps (EPC)", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Manual Functional Steps",1, 2, "TABLE_HEAD");
    oOutput.TableCellF("Semi-automated Functional Steps",1, 2, "TABLE_HEAD");
    oOutput.TableCellF("Automated Functional Steps",1, 2, "TABLE_HEAD");
    oOutput.TableCellF("First level approver", 2, 1, "TABLE_HEAD")
    oOutput.TableCellF("Second level Approver", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Modeller", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Model Version", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Escalation 2", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Escalation 1", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Model Status", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Active review pattern", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("When is CR last released", 2, 1, "TABLE_HEAD");
    oOutput.TableCellF("Audit Trail", 2, 1, "TABLE_HEAD");
    oOutput.TableRow();
    for(var i = 0; i < 7; i++){
        oOutput.TableCellF("", 1, 1, "TABLE_HEAD");
    }
    oOutput.TableCellF("Num ",1, 1, "TABLE_HEAD");
    oOutput.TableCellF("% of manual functions",1, 1, "TABLE_HEAD");
    oOutput.TableCellF("Num ",1, 1, "TABLE_HEAD");
    oOutput.TableCellF("% of semi-automated functions",1, 1, "TABLE_HEAD");
    oOutput.TableCellF("Num ",1, 1, "TABLE_HEAD");
    oOutput.TableCellF("% of automated functions ",1, 1, "TABLE_HEAD");
    for(var i = 0; i < 10; i++){
        oOutput.TableCellF("", 1, 1, "TABLE_HEAD");
    }
}

/**--------------------------------------------------------------------------------------------------------
This Function CAlled defineStyles uses the output Object as parameter and It has almost five format defined 
namely
TEXT
TABLE_HEAD
TABLE_HEAD_RIGHT
TABLE_DATA and last one is 
ERROR
------------------------------------------------------------------------------------------------------------**/
function defineStyles(oOutput){
    oOutput.DefineF("TEXT", "Arial", 9, Constants.C_DARK_BLUE, Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_HEAD", "Arial", 10, Constants.C_BLACK, RGB(246, 246, 246), Constants.FMT_BOLD | Constants.FMT_CENTER | Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_HEAD_RIGHT", "Arial", 10, Constants.C_BLACK, Constants.C_CYAN, Constants.FMT_BOLD | Constants.FMT_RIGHT | Constants.FMT_VCENTER, 
    0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_DATA", "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_DATA_NUMBER", "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT | Constants.FMT_VCENTER | Constants.XL_CELL_TYPE_STRING, 
    0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_DATA_STRING", "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT | Constants.FMT_VCENTER | Constants.XL_CELL_TYPE_STRING,
    0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_DATA_RIGHT", "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_RIGHT | Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF("TABLE_DATA_CENTER", "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_CENTER | Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 0);
    oOutput.DefineF("ERROR", "Arial", 12, Constants.C_RED, Constants.C_WHITE, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0, 0, 0, 0, 0, 1);
}

function RGB(r, g, b) {
    return (new java.awt.Color(r/255.0,g/255.0,b/255.0,1)).getRGB() & 0xFFFFFF
} 
//-----------Call main function---------//
main();
