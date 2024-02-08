var g_nloc = null;
var g_oFilter = ArisData.getActiveDatabase().ActiveFilter();
var db = ArisData.getActiveDatabase();
var g_Output = new __holder(null);   // Object used for the output of the report.
var g_mHouse = db.FindGUID('6db7c310-7e28-11e6-1532-005056c00001');

/*******************************
* ==============================
*       CODE CONFIGURATION
* ==============================
*********************************/
// General => Coporate Identity Style of 14.09.2015 (after Rebranding)
const FONT_TYPE = "Arial";
const FONT_STYLE_NORMAL = "Normal";
const FONT_STYLE_NORMAL_SIZE = 10;
const FONT_STD_COLOR = RGB(0,0,0);
const FONT_STYLE_NORMAL_FMT = Constants.FMT_LEFT| Constants.FMT_VTOP;
const FONT_STYLE_NORMAL_PRGPH_SPACE_BEFORE = 0;
const FONT_STYLE_NORMAL_PRGPH_SPACE_AFTER = 18;
const FONT_STYLE_NORMAL_PRGPH_LINE_SPACE = 1; 
// Headling ==> considers SAG heading style from 1 to 4 => but only 2 and 3 are used
const FONT_STYLE_HEADING_1 = "SAG Heading 1";
const FONT_STYLE_HEADING_1_COLOR = RGB(35,51,86);
const FONT_STYLE_HEADING_1_SIZE = 16;
const FONT_STYLE_HEADING_1_FMT =  Constants.FMT_BOLD | Constants.FMT_LEFT| Constants.FMT_VTOP| Constants.FMT_TOCENTRY0;
const FONT_STYLE_HEADING_1_PRGPH_SPACE_BEFORE = 2;
const FONT_STYLE_HEADING_1_PRGPH_SPACE_AFTER = 2;
const FONT_STYLE_HEADING_1_PRGPH_LINE_SPACE = 2; 

const FONT_STYLE_HEADING_2 = "SAG Heading 2";
const FONT_STYLE_HEADING_2_SIZE = 14;
const FONT_STYLE_HEADING_2_COLOR = RGB(0,0,0);
const FONT_STYLE_HEADING_2_FMT = Constants.FMT_BOLD | Constants.FMT_LEFT| Constants.FMT_VTOP| Constants.FMT_TOCENTRY1; // Constants.FMT_ITALIC | 
const FONT_STYLE_HEADING_2_PRGPH_SPACE_BEFORE = 2;
const FONT_STYLE_HEADING_2_PRGPH_SPACE_AFTER = 2;
const FONT_STYLE_HEADING_2_PRGPH_LINE_SPACE = 2; 

const FONT_STYLE_HEADING_3 = "SAG Heading 3";
const FONT_STYLE_HEADING_3_SIZE = 12;
const FONT_STYLE_HEADING_3_COLOR = RGB(0,0,0);
const FONT_STYLE_HEADING_3_FMT = Constants.FMT_BOLD | Constants.FMT_LEFT| Constants.FMT_VTOP| Constants.FMT_TOCENTRY2;
const FONT_STYLE_HEADING_3_PRGPH_SPACE_BEFORE = 2;
const FONT_STYLE_HEADING_3_PRGPH_SPACE_AFTER = 2;
const FONT_STYLE_HEADING_3_PRGPH_LINE_SPACE = 2 

const FONT_STYLE_HEADING_4 = "SAG Heading 4";
const FONT_STYLE_HEADING_4_SIZE = 10;
const FONT_STYLE_HEADING_4_COLOR = RGB(0,0,0);
const FONT_STYLE_HEADING_4_FMT = Constants.FMT_BOLD | Constants.FMT_LEFT| Constants.FMT_VTOP| Constants.FMT_TOCENTRY3;
const FONT_STYLE_HEADING_4_PRGPH_SPACE_BEFORE = 2;
const FONT_STYLE_HEADING_4_PRGPH_SPACE_AFTER = 2;
const FONT_STYLE_HEADING_4_PRGPH_LINE_SPACE = 2; 

// Tables
const FONT_STYLE_TABLE_HEADER = "SAG Table Text White";
const FONT_STYLE_TABLE_HEADER_COLOR = Constants.C_WHITE;
//const BACKGROUND_STYLE_TABLE_HEADER_COLOR = RGB(166,166,166);
const BACKGROUND_STYLE_TABLE_HEADER_COLOR = RGB(8,153,204);
const FONT_STYLE_TABLE_CONTENT = "SAG Table Text";
const FONT_STYLE_TABLE_CONTENT_COLOR = RGB(0,176,240);
const STYLE_TABLE_FRAME_COLOR = RGB(127,127,127);
const FONT_TABLE_SUBTITLE_COLOR = RGB(0,0,0);
const FONT_TABLE_SUBTITLE_SIZE = 8;
const STYLE_TABLE_BACKGROUND_COLOR = RGB(8,153,204);

// Additional font style (names)
const FONT_STYLE_TITLE = "Title";
const FONT_STYLE_INFO = "Information";
const FONT_STYLE_BULLET_LIST = "List Bullet";

// Page layout
const FONT_STYLE_PAGE_HEADER_LEFT = "Page Header Left";
const FONT_STYLE_PAGE_HEADER_RIGHT= "Page Header Right";
const FONT_STYLE_PAGE_HEADER_SIZE = 11;
const FONT_STYLE_PAGE_HEADER_COLOR = Constants.C_BLACK;


//Borouge Customized Attributes
const BOROUGE_ATTR_SCOPE = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("b18dd661-4813-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_PURPOSE = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("8a696401-4813-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_OWNER = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("6b4581a1-4811-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_EFF_DATE = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("17c9d2e1-4813-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_VERSION = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("48967fe1-4813-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_REVISIONHISTORY = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("2345b3c1-5874-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_INTRODUCTION = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("cea08c01-4815-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_TERMINOLOGY = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("4d0fdd91-4814-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_MONITORREVIEW = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("de5c4b61-5874-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_BPDSTART = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("68ce3ba1-48b7-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_PDMSTART = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("94233c61-6513-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_FIRSTAPPROVER = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("5627e931-5d28-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_SECONDAPPROVER = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("634e4e11-5d28-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_PROCESSCATEGORY = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("faab44d1-903a-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_KPISTATUS = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("f26e1561-937b-11e6-3c7c-005056bd5e68"));
const BOROUGE_ATTR_KPIOBJECTIVE = __toInteger(g_oFilter.UserDefinedAttributeTypeNum("52709fe1-8fa4-11e6-3c7c-005056bd5e68"));

var listProcessDocMap = new Array();
var referencesInBPD = new Array();
var attachmentsInBPD = new Array();
    
function main()
{    
    
    g_nloc = __toLong(Context.getSelectedLanguage());
    
    var listVACDFunc = new Array();
    var functionsInPAM = ArisData.getSelectedObjDefs([Constants.OT_FUNC]);
    var superiorModel = null;
    for(var i = 0; i <= functionsInPAM.length - 1; i++)
    {
       var occListInModel = functionsInPAM[i].OccList();
       for(var j = 0; j <= occListInModel.length - 1; j++)
       {
          if(occListInModel[j].Model().Name(g_nloc) == "BPD Start Objects")
          {
            listVACDFunc.push(occListInModel[j]);
            superiorModel = occListInModel[j].Model();
          }
       }
    }
    
    listVACDFunc = ArisData.Unique(listVACDFunc);

    if(listVACDFunc.length > 1 || listVACDFunc.length == 0)
    {
        Dialogs.MsgBox("Please select one Object Occurence in BPD Start Objects model to get desired results");
    }
     
    else
    {
        var assignedVACD = listVACDFunc[0].ObjDef().AssignedModels(Constants.MT_VAL_ADD_CHN_DGM);
        if(assignedVACD.length > 0)
        {
            var scopeofVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_SCOPE, g_nloc).getValue();
            scopeofVACD = "$Scope#" + "\n" + scopeofVACD + "\n" + "#Scope$";
            var purposeofVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_PURPOSE, g_nloc).getValue();
            purposeofVACD = "$Purpose#" + "\n" + purposeofVACD + "\n" + "#Purpose$";
            var effDateofVACD = "$" + assignedVACD[0].Attribute(BOROUGE_ATTR_EFF_DATE, g_nloc).getValue() + "$";
            var ownerofVACD = "$" + assignedVACD[0].Attribute(BOROUGE_ATTR_FIRSTAPPROVER, g_nloc).getValue() + "$";
            var versionofVACD = "$" + assignedVACD[0].Attribute(BOROUGE_ATTR_VERSION, g_nloc).getValue() + "$";
            var monitorReviewofVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_MONITORREVIEW, g_nloc).getValue();
            var introductionofVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_INTRODUCTION, g_nloc).getValue();
            var docNumofVACD = "$" + assignedVACD[0].Attribute(Constants.AT_ID, g_nloc).getValue() + "$";
            var nameofVACD = assignedVACD[0].Attribute(Constants.AT_NAME_FULL, g_nloc).getValue();
//            var nameofVACD = listVACDFunc[0].ObjDef().Name(g_nloc);
            nameofVACD = "$DocTitle#" + nameofVACD + "#DocTitle$";
            preparePrintOut(scopeofVACD, purposeofVACD, effDateofVACD, versionofVACD, ownerofVACD, docNumofVACD, nameofVACD);
            
            var revisionHistoryOfVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_REVISIONHISTORY,g_nloc).getValue();
            summaryOfAmendments(revisionHistoryOfVACD);
        
            var terminologyofVACD = assignedVACD[0].Attribute(BOROUGE_ATTR_TERMINOLOGY,g_nloc).getValue();
            terminology(terminologyofVACD);
            
            introductionOfVACD(introductionofVACD,assignedVACD[0]);
            
            detailDescofProcesses(assignedVACD[0],listVACDFunc[0]);
            
            processDocumentationMap(listVACDFunc[0]);
            
            monitorAndReviewProcess(monitorReviewofVACD,listProcessDocMap, listVACDFunc[0]);
            
            referencesInBPD = ArisData.Unique(referencesInBPD);
            attachmentsInBPD = ArisData.Unique(attachmentsInBPD);
            
            //referencesAttachements(referencesInBPD,attachmentsInBPD);
            references(listVACDFunc[0]);
        }
        g_Output.value.WriteReport(); 
    }
}

function imageCheck(desc)
{
   var strList = desc.split("[\\{\\}]");
   
   if(strList.length > 0)
   {
      for(var i = 0; i <= strList.length -1; i++)
      {
        var resultStr = strList[i].toString();
        
        if((resultStr.indexOf("_Figure") > -1) || (resultStr.indexOf("_Table") > -1))
        //if(resultStr.indexOf("_Figure") > -1)    
        {

              var imageData = Context.getFile(resultStr+".png", Constants.LOCATION_SCRIPT);
              var image = Context.createPicture(imageData, Constants.IMAGE_FORMAT_PNG);  
              //g_Output.value.OutGraphic(image, -1, g_Output.value.getCurrentMaxWidth(), g_Output.value.GetPageHeight());
                //g_Output.value.OutGraphic(image, -1, g_Output.value.GetPageWidth(), g_Output.value.GetPageHeight());
              
/*                 g_Output.value.BeginTable(100,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT,0);
                g_Output.value.TableRow();
                g_Output.value.TableCell("", 100, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
            
                g_Output.value.OutGraphic(image,-1,g_Output.value.GetPageWidth(), g_Output.value.GetPageHeight())
                g_Output.value.EndTable("",100, "Arial",10,Constants.C_BLACK,Constants.C_BLACK,0,Constants.FMT_LEFT,0);  */  
                
                g_Output.value.BeginTable(100,Constants.C_TRANSPARENT,Constants.C_TRANSPARENT,Constants.FMT_LEFT | Constants.FMT_NOBORDER,0);
                g_Output.value.TableRow();
                g_Output.value.TableCell("", 100, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
            
                g_Output.value.OutGraphic(image,-1,g_Output.value.GetPageWidth(), g_Output.value.GetPageHeight())
                g_Output.value.EndTable("",100, "Arial",10,Constants.C_BLACK,Constants.C_TRANSPARENT,0,Constants.FMT_LEFT,0);                
              

          

        }
        else
        {
         g_Output.value.OutputLnF(resultStr, "Terminology Content"); 
        }
      }
   }
   else
   {
     if((desc !=null) && (desc != "") && (desc != " "))
     {
       g_Output.value.OutputLnF(desc, "Terminology Content"); 
     }
   }
}


function summaryOfAmendments(revisionHistoryOfVACD)
{
   var versionSplit = revisionHistoryOfVACD.split("\r\n"); 
   if(versionSplit.length > 0)
   {
     g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
     g_Output.value.OutputLnF("SUMMARY OF AMENDMENTS",FONT_STYLE_HEADING_1);
     g_Output.value.EndParagraph();
    
     g_Output.value.BeginTable(87, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);
     
     for(var k = 0; k <= versionSplit.length - 1; k++)
     {
         var rowString = versionSplit[k].split(",");
         
         if(rowString.length > 0)
         {
           g_Output.value.TableRow();
           g_Output.value.ResetFrameStyle();
           for(var m = 0; m <= rowString.length - 1; m++)
           {
             if(k == 0)
             {
               if( (m == 0) || (m == 1) || (m == 2) )
               {
                  g_Output.value.TableCell(rowString[m], 10, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
               }
               else if( (m == 3) || (m == 4))
               {
                  g_Output.value.TableCell(rowString[m], 15, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
               }
               else
                  g_Output.value.TableCell(rowString[m], 40, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0); 
             }
             else
             {
               if( (m == 0) || (m == 1) || (m == 2) )
               {
                  g_Output.value.TableCell(rowString[m], 10, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0); 
               }
               else if( (m == 3) || (m == 4))
               {
                  g_Output.value.TableCell(rowString[m], 15, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0); 
               }
               else
                  g_Output.value.TableCell(rowString[m], 40, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0); 
                
             }
           }
         } 
     }
    g_Output.value.EndTable("", 87, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);   
     
   }
   
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);
}


function terminology(terminologyofVACD)
{
   g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
   g_Output.value.OutputLnF("TERMINOLOGY",FONT_STYLE_HEADING_1);
   g_Output.value.EndParagraph();
   g_Output.value.OutputLnF("Key terminology used in this document is either defined on its first occurrence or takes the common definition as stated in the; ", "Terminology Content");
   
   g_Output.value.OutputLnF("", "ListTemplate");
   //g_Output.value.OutputLnF("Borouge Glossary of Terms & Abbreviations: ", "Terminology Content");
   var sTermLink = "http://borhospweb/apps/ADMS/Published/Common%20Documents/Corporate%20Affairs/Quality%20Management/Guideline/QM-GU-001.pdf"
   g_Output.value.OutputLinkF("         Borouge Glossary of Terms & Abbreviations: ", sTermLink, "Terminology Content");
  
   g_Output.value.OutputLnF("\n", "ListTemplate");

   g_Output.value.BeginTable(100, Constants.C_BLACK, RGB(192,192,192),Constants.FMT_JUSTIFY, 0);
   
   g_Output.value.TableCell("", 25, "Arial", 8, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0); 
   g_Output.value.OutputLnF("Responsible (R):", "ListTemplateHeader");
   g_Output.value.OutputLnF("\u2022 The person who is assigned to do the work. Responsible for action and/or implementation", "ListTemplate");
   g_Output.value.OutputLnF("", "ListTemplate");
   g_Output.value.OutputLnF("\u2022 At least one ‘responsible’ role per activity","ListTemplate");
   
   g_Output.value.TableCell("", 25, "Arial", 8, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0);
   g_Output.value.OutputLnF("Accountable (A):", "ListTemplateHeader");
   g_Output.value.OutputLnF("\u2022 The person who makes the final decision and has the ultimate ownership of the outcome", "ListTemplate");
   g_Output.value.OutputLnF("", "ListTemplate");
   g_Output.value.OutputLnF("\u2022 Only one ‘accountable’ role can be assigned for an activity","ListTemplate");
   
   g_Output.value.TableCell("", 25, "Arial", 8, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0);
   g_Output.value.OutputLnF("Consulted (C):", "ListTemplateHeader");
   g_Output.value.OutputLnF("\u2022 The person who must be consulted before a decision or action is taken", "ListTemplate");
   g_Output.value.OutputLnF("", "ListTemplate");
   g_Output.value.OutputLnF("\u2022 Two-way communication between the  responsible and the consulted","ListTemplate");
   
   g_Output.value.TableCell("", 25, "Arial", 8, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0);
   g_Output.value.OutputLnF("Informed (I):", "ListTemplateHeader");
   g_Output.value.OutputLnF("\u2022 The person who must be informed that a decision or action has been taken", "ListTemplate");
   g_Output.value.OutputLnF("", "ListTemplate");
   g_Output.value.OutputLnF("\u2022 One-way communication from the responsible to the informed","ListTemplate");
   
   g_Output.value.EndTable("", 100, "Arial", 8, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_JUSTIFY, 0);

   g_Output.value.OutputLnF("", "Terminology Content");
   
   imageCheck(terminologyofVACD);
   
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);
      
}

function introductionOfVACD(desc, model)
{
   g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
   g_Output.value.OutputLnF("INTRODUCTION",FONT_STYLE_HEADING_1);
   g_Output.value.EndParagraph(); 
   
   imageCheck(g_mHouse.Attribute(Constants.AT_DESC, g_nloc).getValue());
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_BLACK,Constants.FMT_LEFT);  
   //modelGraphicView(g_mHouse);
   
    var oPIC = g_mHouse.Graphic(false, false, g_nloc, true);
    g_Output.value.BeginTable(100,Constants.C_TRANSPARENT,Constants.C_TRANSPARENT,Constants.FMT_LEFT | Constants.FMT_NOBORDER,0);
    g_Output.value.TableRow();
    g_Output.value.TableCell("", 100, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);

    g_Output.value.OutGraphic(oPIC,-1,g_Output.value.GetPageWidth(), g_Output.value.GetPageHeight())
    g_Output.value.EndTable("",100, "Arial",10,Constants.C_BLACK,Constants.C_TRANSPARENT,0,Constants.FMT_LEFT,0);
   
   g_Output.value.OutputLnF("","Template1");
   g_Output.value.OutputLnF(model.Attribute(BOROUGE_ATTR_PROCESSCATEGORY,g_nloc).getValue(),"Template1");
   g_Output.value.OutputLnF("","Template1");
   
   imageCheck(desc);
   
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);
}

function monitorAndReviewProcess(attrMonitorReview, listPDM, oItemOcc)
{
   g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
   g_Output.value.OutputLnF("MONITOR AND REVIEW PROCESSES",FONT_STYLE_HEADING_1);
   g_Output.value.EndParagraph(); 
   
   imageCheck(attrMonitorReview);
   
   if(listPDM.length > 0)
   {
    for(var z = 0; z <= listPDM.length - 1; z++)
    {
      var assignChildModel = listPDM[z].ObjDef().AssignedModels(Constants.MT_VAL_ADD_CHN_DGM);  
      var monitorReviewofVACD = assignChildModel[0].Attribute(TYPENUM_ATTR_MONITORREVIEW, g_nloc).getValue();
      if((monitorReviewofVACD != null) && (monitorReviewofVACD != "") && (monitorReviewofVACD != " "))
      {
        g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
        g_Output.value.OutputLnF(listPDM[z].ObjDef().Name(g_nloc),FONT_STYLE_HEADING_2);
        g_Output.value.EndParagraph(); 
        imageCheck(monitorReviewofVACD); 
      }
    }
   }
   
   //KPI
    var oFADs = oItemOcc.ObjDef().AssignedModels([Constants.MT_FUNC_ALLOC_DGM]);

    if (oFADs.length == 1){
      g_Output.value.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);
      g_Output.value.TableRow();
      g_Output.value.TableCell("KPI", 40, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      g_Output.value.TableCell("KPI Objective", 15, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      g_Output.value.TableCell("KPI Type", 10, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      g_Output.value.TableCell("Calculation Formula", 35, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        
        var oKPIs = oFADs[0].ObjOccListBySymbol([Constants.ST_KPI]);
        oKPIs = ArisData.sort(oKPIs,Constants.AT_NAME, g_nloc);
        
        for(var a = 0; a < oKPIs.length; a++) {
            g_Output.value.TableRow();  
            g_Output.value.TableCell(oKPIs[a].ObjDef().Name(g_nloc), 40, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
            g_Output.value.TableCell(oKPIs[a].ObjDef().Attribute(BOROUGE_ATTR_KPIOBJECTIVE, g_nloc).getValue(), 15, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
            g_Output.value.TableCell(oKPIs[a].ObjDef().Attribute(BOROUGE_ATTR_KPISTATUS, g_nloc).getValue(), 10, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
            g_Output.value.TableCell(oKPIs[a].ObjDef().Attribute(Constants.AT_DESC, g_nloc).getValue(), 35, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VTOP, 0);

        }
        g_Output.value.EndTable("", 100, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_LEFT | Constants.FMT_BOLD, 0);   
        
    }
    
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);
}

function detailDescofProcesses(model,superiorObject)
{
   var res = superiorObject.ObjDef().Name(g_nloc); 
   g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
   var modelURL = getHTMLLink(model);
   g_Output.value.OutputLinkF("MAIN PROCESS OF " + res.toUpperCase(), modelURL, FONT_STYLE_HEADING_1);  
   g_Output.value.EndParagraph();  
    
   var descofVACD = model.Attribute(Constants.AT_DESC, g_nloc).getValue();
   imageCheck(descofVACD);
   modelGraphicView(model);

   checkReferencesAttachments(model);
   
   var listFuncinChildModelL1 = new Array();
   //listFuncinChildModelL1 = findFunctionsinVACD(model,res);
   listFuncinChildModelL1 = findFunctionsinVACD(model, superiorObject.ObjDef());
   
   showRACI(listFuncinChildModelL1);
   
   //lelvel 1 details
   for(var u = 0 ; u <= listFuncinChildModelL1.length - 1; u++)
   {
     var funcObjName = listFuncinChildModelL1[u].Name(g_nloc);
     var modelsAssigned = checkAssignedModel(listFuncinChildModelL1[u]);
       //var descofVACD = modelsAssigned.Attribute(Constants.AT_DESC, g_nloc).getValue();
       //imageCheck(descofVACD);
       //imageCheck(listFuncinChildModelL1[u].Attribute(Constants.AT_DESC, g_nloc).getValue());
    
     if((modelsAssigned != null) && (modelsAssigned != "No Model Assigned"))
     {
       var childModelURL = getHTMLLink(modelsAssigned);  
       g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
       g_Output.value.OutputLinkF(funcObjName.toUpperCase(),childModelURL, FONT_STYLE_HEADING_2);
       g_Output.value.EndParagraph();

       showOwner(modelsAssigned);
       
       imageCheck(listFuncinChildModelL1[u].Attribute(Constants.AT_DESC, g_nloc).getValue());
       
     }else{
       g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
       g_Output.value.OutputLinkF(funcObjName.toUpperCase(),childModelURL, FONT_STYLE_HEADING_2);
       g_Output.value.EndParagraph();
       
       imageCheck(listFuncinChildModelL1[u].Attribute(Constants.AT_DESC, g_nloc).getValue());
     }
     
    var listFuncinChildModelL2 = new Array(); 
    if((modelsAssigned != null) && (modelsAssigned != "No Model Assigned"))
     {     
       //imageCheck(listFuncinChildModelL1[u].Attribute(Constants.AT_DESC, g_nloc).getValue());
       modelGraphicView(modelsAssigned);
       
       //Second Level L2
       
       //listFuncinChildModelL2 = findFunctionsinVACD(modelsAssigned,funcObjName);
       listFuncinChildModelL2 = findFunctionsinVACD(modelsAssigned,listFuncinChildModelL1[u]);
       
       showRACI(listFuncinChildModelL2);
       
       //if (modelsAssigned.Attribute(BOROUGE_ATTR_BPDSTART, g_nloc).getValue()==false){
/*            for(var v = 0 ; v <listFuncinChildModelL2.length ; v++){
                var descofVACDL2 = listFuncinChildModelL2[v].Attribute(Constants.AT_DESC, g_nloc).getValue();

                g_Output.value.OutputLnF(listFuncinChildModelL2[v].Attribute(Constants.AT_ID, g_nloc).getValue(), "Header Content");
                imageCheck(descofVACDL2);
                g_Output.value.OutputLnF("", "Terminology Content");           
                
           } */
       //}
       
       //
       if ((modelsAssigned.Attribute(BOROUGE_ATTR_BPDSTART, g_nloc).IsMaintained()==false) || 
           (modelsAssigned.Attribute(BOROUGE_ATTR_BPDSTART, g_nloc).getValue()=="False"))
       {
           listFuncinChildModelL2 = findFunctionsinVACD(modelsAssigned,listFuncinChildModelL1[u]);
           for(var v = 0 ; v <listFuncinChildModelL2.length ; v++){
                var descofVACDL2 = listFuncinChildModelL2[v].Attribute(Constants.AT_DESC, g_nloc).getValue();

                g_Output.value.OutputLnF(listFuncinChildModelL2[v].Attribute(Constants.AT_ID, g_nloc).getValue(), "Header Content");
                imageCheck(descofVACDL2);
                g_Output.value.OutputLnF("", "Terminology Content");           
           }           
           
           
           for(var v = 0 ; v <listFuncinChildModelL2.length; v++)
           {
             var funcObjNameL2 = listFuncinChildModelL2[v].Name(g_nloc);
             var modelsAssignedL1 = checkAssignedModel(listFuncinChildModelL2[v]);
             
             if((modelsAssignedL1 != null) && (modelsAssignedL1 != "No Model Assigned"))
             {
               
               var childModelL2URL = getHTMLLink(modelsAssignedL1);
               g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_3);
               g_Output.value.OutputLinkF(funcObjNameL2.toUpperCase(),childModelL2URL, FONT_STYLE_HEADING_3);
               g_Output.value.EndParagraph();
                    
               //imageCheck(descofVACDL2);
               showOwner(modelsAssignedL1);
               //imageCheck(listFuncinChildModelL2[v].Name(g_nloc));
               modelGraphicView(modelsAssignedL1); 
               
               checkForAdditionalLevels(modelsAssignedL1,listFuncinChildModelL2[v]);
             } 
             
             else
             {
               /*  
               g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_3);
               g_Output.value.OutputLinkF(funcObjNameL2.toUpperCase(),"", FONT_STYLE_HEADING_3);
               g_Output.value.EndParagraph();  
               */
             }
           }
       
       }
       
     }

     else
     {
       /*  
       g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
       g_Output.value.OutputLinkF(funcObjName.toUpperCase(),"", FONT_STYLE_HEADING_2);
       g_Output.value.EndParagraph();  
       */
     }     
   }
  
   g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);       
} 


function checkAssignedModel(object)
{
   var fadAssigned = "False";
   var vacdAssigned = "False";
   var epcAssigned = "False";
   var assignChildModelFAD = object.AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
   if(assignChildModelFAD.length > 0)
   {
     fadAssigned = "True";
     checkReferencesAttachments(assignChildModelFAD[0]);
   }
   
   var assignChildModel = object.AssignedModels([Constants.MT_VAL_ADD_CHN_DGM, Constants.MT_EEPC]);
   if(assignChildModel.length > 0)
   {
     vacdAssigned = "True";
     checkReferencesAttachments(assignChildModel[0]);
   }
   
   if(vacdAssigned == "True")
   {
     return assignChildModel[0];
   }
   else
   {
     return "No Model Assigned";
   }
}


function checkForAdditionalLevels(L2Model,funcObjL2)
{
  var listFuncinChildModelL3 = new Array();
  listFuncinChildModelL3 = findFunctionsinVACD(L2Model,funcObjL2);
  
  showRACI(listFuncinChildModelL3);
  
  var count = 0;
  
  for(var w = 0 ; w <listFuncinChildModelL3.length; w++)
  {
     //var funcObjNameL3 = listFuncinChildModelL3[w].Name(g_nloc);
     var assignChildModelL2 = listFuncinChildModelL3[w].AssignedModels(Constants.MT_VAL_ADD_CHN_DGM);
     if(assignChildModelL2.length > 0)
     {
       count = count + 1; 
     }
     
     var assignChildModelFADL3 = listFuncinChildModelL3[w].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
     if(assignChildModelFADL3.length > 0)
     {
       checkReferencesAttachments(assignChildModelFADL3[0]);
     }
  }
  
  if(count == 0)
  {
    for(var h = 0 ; h <= listFuncinChildModelL3.length - 1; h++)
    {
      var objIdentifier = listFuncinChildModelL3[h].Attribute(Constants.AT_ID,g_nloc).getValue();
      var objDescription = listFuncinChildModelL3[h].Attribute(Constants.AT_DESC,g_nloc).getValue();
      g_Output.value.OutputLnF(objIdentifier, "Header Content");
      imageCheck(objDescription);
      //g_Output.value.OutputLnF(objDescription, "Terminology Content");
      g_Output.value.OutputLnF("", "Terminology Content");
    }      
  }
  else
  {
    
    for(var g = 0 ; g <= listFuncinChildModelL3.length - 1; g++)
    {
      var functionObjNameL3 = listFuncinChildModelL3[g].Name(g_nloc);
      
      var assignChildModelFADL4 = listFuncinChildModelL3[g].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
      if(assignChildModelFADL4.length > 0)
      {
        checkReferencesAttachments(assignChildModelFADL4[0]);
      }
     
      var assignChildModelL3 = listFuncinChildModelL3[g].AssignedModels(Constants.MT_VAL_ADD_CHN_DGM); 
      
      
      if(assignChildModelL3.length > 0)
      {
        var childModelL3URL = getHTMLLink(assignChildModelL3[0]);
        checkReferencesAttachments(assignChildModelL3[0]);
        g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_4);
        g_Output.value.OutputLinkF(functionObjNameL3.toUpperCase(),childModelL3URL, FONT_STYLE_HEADING_4);
        g_Output.value.EndParagraph();
       
        var descofVACDL3 = listFuncinChildModelL3[g].Attribute(Constants.AT_DESC, g_nloc).getValue();
        imageCheck(descofVACDL3);
        modelGraphicView(assignChildModelL3[0]);
        
        
          var listFuncinChildModelL4 = new Array();
          listFuncinChildModelL4 = findFunctionsinVACD(assignChildModelL3[0],listFuncinChildModelL3[g]);  

            showRACI(listFuncinChildModelL4)
      }
         
      else
      {
        /*  
        g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_4);
        g_Output.value.OutputLinkF(functionObjNameL3.toUpperCase(),"", FONT_STYLE_HEADING_4);
        g_Output.value.EndParagraph();
        */
      }
    }      
  }
}


function findFunctionsinVACD(modelVACD,superiorObject)
{
   
   var listFuncinModel = new Array();
   var processOrienCon = modelVACD.CxnOccListFilter(39);
   
   for(var t = 0 ; t <= processOrienCon.length - 1; t++)
   {
      //if(processOrienCon[t].getSource().ObjDef().Name(g_nloc) == superiorObject)
      if(processOrienCon[t].getSource().ObjDef().IsEqual(superiorObject))
      {        
         listFuncinModel.push(processOrienCon[t].getTarget().ObjDef());
      }
   } 
   
   listFuncinModel = ArisData.Unique(listFuncinModel);
   listFuncinModel = ArisData.sort(listFuncinModel, Constants.AT_ID, g_nloc);
   return listFuncinModel;
}


function checkReferencesAttachments(model)
{
   var oDocs = model.ObjOccListBySymbol([Constants.ST_DOC, Constants.ST_SAP_GENERAL_DOC, Constants.ST_INFO_CARR_EDOC]);
   if(oDocs.length > 0)
   {
     for(var m = 0 ; m < oDocs.length; m++)
     {
       referencesInBPD.push(oDocs[m].ObjDef());
     }
   }
   
} 

function getDocs(model){
   var arrDocs = new Array();
   
   var oDocs = model.ObjOccListBySymbol([Constants.ST_DOC, Constants.ST_SAP_GENERAL_DOC, Constants.ST_INFO_CARR_EDOC]);
   if(oDocs.length > 0)
   {
     for(var m = 0 ; m < oDocs.length; m++)
     {
       arrDocs.push(oDocs[m].ObjDef());
     }
   }
   
   arrDocs = ArisData.sort(arrDocs, Constants.AT_ID, g_nloc);
   
   return arrDocs;
}
/*    
function checkReferencesAttachments(model)
{
   var referencesInModel = model.ObjOccListBySymbol([531]);
   var attachmentsInModel = model.ObjOccListBySymbol([29]);   
   if(referencesInModel.length > 0)
   {
     for(var m = 0 ; m <= referencesInModel.length - 1; m++)
     {
       referencesInBPD.push(referencesInModel[m].ObjDef());
     }
   }
   if(attachmentsInModel.length > 0)
   {
     for(var n = 0 ; n <= attachmentsInModel.length - 1; n++)
     {
       attachmentsInBPD.push(attachmentsInModel[n].ObjDef());   
     }            
   }   
}   
*/    
  
/*   var funcInVACD = model.ObjOccListBySymbol([TYPENUM_PROCESS_DELIVER,TYPENUM_PROCESS_MGMTCONTROL,TYPENUM_PROCESS_PRODUCE,TYPENUM_PROCESS_SELL,TYPENUM_PROCESS_SUPPORT,105]);
   funcInVACD = ArisData.Unique(funcInVACD);
   funcInVACD = ArisData.sort(funcInVACD,Constants.SORT_X,g_nloc);// sort by y-coordinate 
   for(var t = 0 ; t <= funcInVACD.length - 1; t++)
   {
     if(funcInVACD[t].ObjDef().Name(g_nloc) != superiorObject.ObjDef().Name(g_nloc))
     {
        listProcessDocMap.push(funcInVACD[t]);
        var funcObjName = funcInVACD[t].ObjDef().Name(g_nloc);
        var assignChildModel = funcInVACD[t].ObjDef().AssignedModels(Constants.MT_VAL_ADD_CHN_DGM);
        
        g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
        g_Output.value.OutputLinkF(funcObjName.toUpperCase(),"http://www.google.com", FONT_STYLE_HEADING_2);
        g_Output.value.EndParagraph(); 
        
        var ownerName = assignChildModel[0].Attribute(TYPENUM_ATTR_OWNER,g_nloc).getValue(); 
        if((ownerName != null) && (ownerName != "") && (ownerName != " "))
        {
          g_Output.value.OutputLnF("Process Owners: " + ownerName, "Process Content");
        }
        
        var funcDesc = assignChildModel[0].Attribute(Constants.AT_DESC,g_nloc).getValue();
        var checkResult = "";
        if((funcDesc != null) && (funcDesc != "") && (funcDesc != " "))
        {
          checkResult = checkDescription(funcDesc);
        }
        
        modelGraphicView(assignChildModel[0]);
        
        var functionsInVACDL2 = assignChildModel[0].ObjOccListBySymbol([TYPENUM_PROCESS_DELIVER,TYPENUM_PROCESS_MGMTCONTROL,TYPENUM_PROCESS_PRODUCE,TYPENUM_PROCESS_SELL,TYPENUM_PROCESS_SUPPORT,105]);
        functionsInVACDL2 = ArisData.sort(functionsInVACDL2,Constants.SORT_X,g_nloc);// sort by X-coordinate                     
       
        //Checking for next level whether it is VACD or FAD
        var listFAD = new Array();
        var listFADFunc = new Array();
        var listVACDtoFAD = new Array();
        var listVACDFunc = new Array();
        
        for(var g = 0 ; g <= functionsInVACDL2.length - 1; g++)
        {
          var assignedChildModelVACDFADL2 = functionsInVACDL2[g].ObjDef().AssignedModels([Constants.MT_VAL_ADD_CHN_DGM,Constants.MT_FUNC_ALLOC_DGM]);
          
          if(assignedChildModelVACDFADL2.length > 0)
          {
              if(assignedChildModelVACDFADL2[0].TypeNum() == 12)
              {
                var listVACDFuncWOFAD = new Array();
                if(checkResult == "True")
                {
                  g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_4);
                  g_Output.value.OutputLinkF(functionsInVACDL2[g].ObjDef().Name(g_nloc).toUpperCase(),"http://www.google.com", FONT_STYLE_HEADING_4);
                }
                else
                {
                  g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_3);
                  g_Output.value.OutputLinkF(functionsInVACDL2[g].ObjDef().Name(g_nloc).toUpperCase(),"http://www.google.com", FONT_STYLE_HEADING_3);
                }
                  g_Output.value.EndParagraph(); 
        
                var ownerNameL3 = assignedChildModelVACDFADL2[0].Attribute(TYPENUM_ATTR_OWNER,g_nloc).getValue(); 
                if((ownerNameL3 != null) && (ownerNameL3 != "") && (ownerNameL3 != " "))
                {
                  g_Output.value.OutputLnF("Process Owners: " + ownerNameL3, "Process Content");
                }
        
                var funcDescL3 = assignedChildModelVACDFADL2[0].Attribute(Constants.AT_DESC,g_nloc).getValue();
                if((funcDescL3 != null) && (funcDescL3 != "") && (funcDescL3 != " "))
                {
                  checkDescription(funcDescL3);
                }
        
                modelGraphicView(assignedChildModelVACDFADL2[0]); 

                var functionsInVACDL3 = assignedChildModelVACDFADL2[0].ObjOccListBySymbol([TYPENUM_PROCESS_DELIVER,TYPENUM_PROCESS_MGMTCONTROL,TYPENUM_PROCESS_PRODUCE,TYPENUM_PROCESS_SELL,TYPENUM_PROCESS_SUPPORT,105]);
                functionsInVACDL3 = ArisData.sort(functionsInVACDL3,Constants.SORT_X,g_nloc);// sort by X-coordinate 
                for(var h = 0 ; h <= functionsInVACDL3.length - 1; h++)
                {
                   var assignedChildModelVACDFADL3 = functionsInVACDL3[h].ObjDef().AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
                   if(assignedChildModelVACDFADL3.length > 0)
                   {
                      listVACDtoFAD.push(assignedChildModelVACDFADL3[0]); 
                      listVACDFunc.push(functionsInVACDL3[h]);
                   }
                   else
                   {
                       listVACDFuncWOFAD.push(functionsInVACDL3[h]);
                   }
                } 

                if(listVACDtoFAD.length > 0)
                {
                  fadRACICheck(listVACDtoFAD);
                  for(var h = 0 ; h <= listVACDFunc.length - 1; h++)
                  {
                   var objIdentifier = listVACDFunc[h].ObjDef().Attribute(Constants.AT_ID,g_nloc).getValue();
                   var objDescription = listVACDFunc[h].ObjDef().Attribute(Constants.AT_DESC,g_nloc).getValue();
                   g_Output.value.OutputLnF(objIdentifier, "Header Content");
                   g_Output.value.OutputLnF(objDescription, "Terminology Content"); 
                  }
                } 
               listVACDtoFAD = ""; 

                 if(listVACDFuncWOFAD.length > 0)
                 {
                  for(var d = 0 ; d <= listVACDFuncWOFAD.length - 1; d++)
                  {
                   var objIdentifier = listVACDFuncWOFAD[d].ObjDef().Attribute(Constants.AT_ID,g_nloc).getValue();
                   var objDescription = listVACDFuncWOFAD[d].ObjDef().Attribute(Constants.AT_DESC,g_nloc).getValue();
                   g_Output.value.OutputLnF(objIdentifier, "Header Content");
                   g_Output.value.OutputLnF(objDescription, "Terminology Content"); 
                  } 
                 }
              }
              
              if(assignedChildModelVACDFADL2[0].TypeNum() == 14)
              {
                 listFAD.push(assignedChildModelVACDFADL2[0]); 
                 listFADFunc.push(functionsInVACDL2[g]);
              }
          }
          
          else
          {
            var objIdentifier = functionsInVACDL2[g].ObjDef().Attribute(Constants.AT_ID,g_nloc).getValue();
            var objDescription = functionsInVACDL2[g].ObjDef().Attribute(Constants.AT_DESC,g_nloc).getValue();
            g_Output.value.OutputLnF(objIdentifier, "Header Content");
            g_Output.value.OutputLnF(objDescription, "Terminology Content");  
          }
       }
       

       if(listFAD.length > 0)
       {
         fadRACICheck(listFAD);
         for(var e = 0 ; e <= listFADFunc.length - 1; e++)
         {
           var objIdentifier = listFADFunc[e].ObjDef().Attribute(Constants.AT_ID,g_nloc).getValue();
           var objDescription = listFADFunc[e].ObjDef().Attribute(Constants.AT_DESC,g_nloc).getValue();
           g_Output.value.OutputLnF(objIdentifier, "Header Content");
           g_Output.value.OutputLnF(objDescription, "Terminology Content"); 
         }
       }
       
     }
  }
}



function fadRACICheck(fadArray)
{
   g_Output.value.OutputLn("", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_LEFT, 0);
   g_Output.value.OutputLnF("FAD - RACI", "Header Content");   
   
   g_Output.value.BeginTable(87, Constants.C_BLACK, Constants.C_WHITE,Constants.FMT_JUSTIFY, 0);  
   g_Output.value.TableRow();
   
   for(var n = 0 ; n <= fadArray.length - 1; n++)
   {
     g_Output.value.TableCellF(fadArray[n].Name(g_nloc), 87/fadArray.length, "Header Content");
   }
   
   g_Output.value.TableRow();
   var objectToCheckFAD = "";
   for(var p = 0 ; p <= fadArray.length - 1; p++)
   {
     g_Output.value.TableCellF("", 87/fadArray.length, "Header Content");
     objectToCheckFAD =  fadArray[p].SuperiorObjDefs();
     objectToCheckFAD = objectToCheckFAD[0];
     
     var rolesinFAD = fadArray[p].ObjDefListBySymbols([Constants.ST_EMPL_TYPE]);
                
     if(rolesinFAD.length > 0)
     {
       for(var j = 0 ; j <= rolesinFAD.length - 1; j++)
       {
         var rolesConnToFunc = rolesinFAD[j].CxnListFilter(Constants.EDGES_INOUT,[326,218,220,358]);
         var roleResult = "";
         var finalResult = "";         
         for(var m = 0 ; m <= rolesConnToFunc.length - 1; m++)
         {
           if((objectToCheckFAD.Name(g_nloc)) == rolesConnToFunc[m].TargetObjDef().Name(g_nloc))
           {
             var roleConnType = rolesConnToFunc[m].ActiveType();              
             if(roleConnType == "Responsible")
             {
                roleResult = "R";
             }
                             
             if(roleConnType == "Accountable")
             {
                roleResult = "A";
             }
                             
             if(roleConnType == "Consulted")
             {
                roleResult = "C";
             }
                             
             if(roleConnType == "Informed")
             {
                roleResult = "I";
             }
             
             if(m == rolesConnToFunc.length - 1)
             {
                finalResult = roleResult + finalResult;
             }
             else
             {
                finalResult = finalResult + "/" + roleResult; 
             }
            }
         }
         g_Output.value.OutputLnF("(" + finalResult + ")" + "," + rolesinFAD[j].Name(g_nloc), "Header Content"); 
       }
     }
   }
    g_Output.value.EndTable("", 87, "Arial", 11, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_JUSTIFY, 0);
}


*/

function checkDescription(funcDesc)
{
   var result = funcDesc.trim().split("##");
   var resultContainsHash = "False";   
   if(result.length > 1)
   {
     resultContainsHash = "True";
     for(var u = 0 ; u <= result.length - 1; u++)
     {
       if(result[u].length > 0)
       {
         var resultDesc = result[u].split("\r\n");
         g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_3);
         g_Output.value.OutputLnF(resultDesc[0], FONT_STYLE_HEADING_3);
         g_Output.value.EndParagraph();
                
         var finalResult = "";
         for(var v = 1 ; v <= resultDesc.length - 1; v++)
         {
            finalResult = finalResult + resultDesc[v] + "\n";  
         }
                 
         g_Output.value.OutputLnF(finalResult, "Terminology Content");
        }
      }
    }
    else
    {
       g_Output.value.OutputLnF(funcDesc, "Terminology Content");  
    }
    
   return resultContainsHash;
}

function modelGraphicView(model)
{
   var modelGraphic = model.Graphic(false, false, g_nloc, true);
      
   var nGWidth     = modelGraphic.getWidth(Constants.SIZE_PIXEL);
   var nGHeight    = modelGraphic.getHeight(Constants.SIZE_PIXEL);
      
   nGWidth = nGWidth * 0.264583;
   nGHeight = nGHeight * 0.264583;
   
    //var oPIC = g_mHouse.Graphic(false, false, g_nloc, true);
    //g_Output.value.BeginTable(100,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT,0);
    //g_Output.value.TableRow();
    //g_Output.value.TableCell("", 100, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    g_Output.value.OutGraphic(modelGraphic,-1, g_Output.value.GetPageWidth(), g_Output.value.GetPageHeight() - g_Output.value.GetTopMargin() - g_Output.value.GetBottomMargin() -g_Output.value.GetDistHeader()-g_Output.value.GetDistFooter() - 40)
    //g_Output.value.EndTable("",100, "Arial",10,Constants.C_BLACK,Constants.C_BLACK,0,Constants.FMT_LEFT,0); 
      
/*    if( (nGWidth > 700) || (nGHeight > 700))
   {
    g_Output.value.OutGraphic(modelGraphic, 15, g_Output.value.getCurrentMaxWidth(), g_Output.value.GetPageHeight()
    - g_Output.value.GetTopMargin() - g_Output.value.GetBottomMargin() -g_Output.value.GetDistHeader()-g_Output.value.GetDistFooter() -20);
   } 
      
   else
   {
    g_Output.value.OutGraphic(modelGraphic, -1, g_Output.value.getCurrentMaxWidth(), g_Output.value.GetPageHeight() - g_Output.value.GetTopMargin() - g_Output.value.GetBottomMargin() -g_Output.value.GetDistHeader()-g_Output.value.GetDistFooter() -20);
   }  */
}


function showOwner(model)
{
    var oRoles = model.ObjOccListBySymbol([Constants.ST_ORG_UNIT_2, Constants.ST_EMPL_TYPE, Constants.ST_POS]);
    oRoles = ArisData.sort(oRoles, Constants.AT_NAME, g_nloc);
    var arrOwners = new Array();
    
    for (var i=0; i<oRoles.length; i++){
        var oCxns = oRoles[i].CxnOccList();
        
        for (var j=0; j<oCxns.length; j++){
            if ((oCxns[j].CxnDef().TypeNum()==Constants.CT_OWNS) || (oCxns[j].CxnDef().TypeNum()==Constants.CT_OWNS_3)){
                arrOwners.push(oRoles[i]);
            }
        }
    }
    
    var sOwners = convertArrayToString(arrOwners, ", ")
    
    g_Output.value.OutputLnF("Process Owners: " + sOwners, "Template1"); 

}

function showRACI(arrItems)
{
    var arrRACI = new Array();
    
    for (var i=0; i<arrItems.length; i++){
        var oRACIData = new Data_RACI();
        oRACIData.Process = arrItems[i];
        oRACIData.R = new Array();
        oRACIData.A = new Array();
        oRACIData.C = new Array();
        oRACIData.I = new Array();
        
        var oFADs = arrItems[i].AssignedModels([Constants.MT_FUNC_ALLOC_DGM]);
        
        if (oFADs.length==1){
            var oRoles = oFADs[0].ObjOccListBySymbol([Constants.ST_ORG_UNIT_2, Constants.ST_EMPL_TYPE, Constants.ST_POS]);
            oRoles = ArisData.sort(oRoles, Constants.AT_NAME, g_nloc);            
            
            for (var j=0; j<oRoles.length; j++){
                var oCxns = oRoles[j].CxnOccList();
                
                for (var k=0; k<oCxns.length; k++){
                    //R
                    if ((oCxns[k].CxnDef().TypeNum()==Constants.CT_IS_RESP_FOR_1) || (oCxns[k].CxnDef().TypeNum()==Constants.CT_IS_RESP_1)
                    || (oCxns[k].CxnDef().TypeNum()==Constants.CT_IS_RESP_FOR_2) || (oCxns[k].CxnDef().TypeNum()==Constants.CT_IS_RESP_2)){
                        oRACIData.R.push(oRoles[j]);
                    }
                    
                    //A
                    if (oCxns[k].CxnDef().TypeNum()==Constants.CT_IS_GRANT_BY){
                        oRACIData.A.push(oRoles[j]);
                    }
                    
                    //C
                    if ((oCxns[k].CxnDef().TypeNum()==Constants.CT_HAS_CONSLT_ROLE_IN_1) || (oCxns[k].CxnDef().TypeNum()==Constants.CT_HAS_CONSLT_ROLE_IN_2)){
                        oRACIData.C.push(oRoles[j]);
                    }     
                    
                    //I
                    if ((oCxns[k].CxnDef().TypeNum()==Constants.CT_MUST_BE_INFO_ABT_1) || (oCxns[k].CxnDef().TypeNum()==Constants.CT_MUST_BE_INFO_ABT_2)){
                        oRACIData.I.push(oRoles[j]);
                    }                    
                }
            }            
        }
    
        arrRACI.push(oRACIData);
    }
    
    //table header
    if (arrRACI.length>0){
        g_Output.value.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);    
        
        //header
        g_Output.value.TableRow();
        g_Output.value.TableCell("", 5, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        for (var i=0; i<arrRACI.length; i++){
            g_Output.value.TableCell(arrRACI[i].Process.Name(g_nloc), 95/arrRACI.length, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        }
        
        //R
        g_Output.value.TableRow();
        g_Output.value.TableCell("R", 5, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        for (var i=0; i<arrRACI.length; i++){
            g_Output.value.TableCell(convertArrayToString(arrRACI[i].R, ", ") , 95/arrRACI.length, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        }
        
        //A
        g_Output.value.TableRow();
        g_Output.value.TableCell("A", 5, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        for (var i=0; i<arrRACI.length; i++){
            g_Output.value.TableCell(convertArrayToString(arrRACI[i].A, ", ") , 95/arrRACI.length, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        }
        
        //C
        g_Output.value.TableRow();
        g_Output.value.TableCell("C", 5, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        for (var i=0; i<arrRACI.length; i++){
            g_Output.value.TableCell(convertArrayToString(arrRACI[i].C, ", "), 95/arrRACI.length, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        }
        
        //I        
        g_Output.value.TableRow();
        g_Output.value.TableCell("I", 5, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        
        for (var i=0; i<arrRACI.length; i++){
            g_Output.value.TableCell(convertArrayToString(arrRACI[i].I, ", "), 95/arrRACI.length, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        }
        
        g_Output.value.EndTable("", 100, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);   
        
    }
    
    g_Output.value.OutputLnF("", "Terminology Content");

}

function Data_RACI(){
    this.Process = null;
    this.R = null;
    this.A = null;
    this.C = null;
    this.C = null;
}

function Data_Process(){
    this.Process = null;
    this.subProcess = null;
    this.document = null;
}

function processDocumentationMap(startObjBPD)
{
   //var startObjName = startObjBPD.ObjDef().Name(g_nloc);
   
   g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
   g_Output.value.OutputLnF("PROCESS DOCUMENTATION MAP",FONT_STYLE_HEADING_1);
   g_Output.value.EndParagraph();
     
   g_Output.value.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);
   g_Output.value.TableRow();
   g_Output.value.ResetFrameStyle();
   g_Output.value.TableCell("Process Title", 30, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
   g_Output.value.TableCell("Sub- Process Title", 30, "Arial", 10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
   g_Output.value.TableCell("Related Document", 40, "Arial",  10, Constants.C_BLACK, RGB(192,192,192), Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
 
   if(startObjBPD.ObjDef().GUID() == "56a2342f-4644-11e6-1531-005056c00001")
   {
       //exceptional handling
     var assignChildModel = startObjBPD.ObjDef().AssignedModels(Constants.MT_VAL_ADD_CHN_DGM);
     
     if(assignChildModel.length > 0)
     {
       var functionsInVACDL2 = findFunctionsinVACD(assignChildModel[0],startObjBPD.ObjDef());
       for(var c = 0; c <functionsInVACDL2.length; c++)
       {
         displayPDM(functionsInVACDL2[c], assignChildModel[0]);
       }
     }
     else
     {/*
       g_Output.value.TableCell(functionsInVACDL2[c].ObjDef().Name(g_nloc), 30, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
       g_Output.value.TableCell("Not applicable", 30, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
       g_Output.value.TableCell("Not applicable", 20, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
     */ 
     }
   }
   
   //exceptional handling
   else if((startObjBPD.ObjDef().GUID() == "1a2151ac-6837-11e6-3c7c-005056bd5e68") || (startObjBPD.ObjDef().GUID() == "1a2151af-6837-11e6-3c7c-005056bd5e68") || (startObjBPD.ObjDef().GUID() == "1a2151a6-6837-11e6-3c7c-005056bd5e68")
            || (startObjBPD.ObjDef().GUID() == "1a2151a3-6837-11e6-3c7c-005056bd5e68"))
        
    {
        displayPDML1(startObjBPD.ObjDef());
        
/*        var occListInModelVACD = startObjBPD.ObjDef().OccList();
       for(var j = 0; j <occListInModelVACD.length; j++)
       {
          if(occListInModelVACD[j].Model().GUID() == "00109f21-683a-11e6-3c7c-005056bd5e68")
          {
            var assignedVACDModel = occListInModelVACD[j].Model();
            var superiorObj = occListInModelVACD[j].Model().getSuperiorObjDefs();
            superiorObj = superiorObj[0];
            displayPDM(superiorObj, assignedVACDModel);
          }
       }   */ 
    }
    
    else
    {
      var assignChildModel = startObjBPD.ObjDef().AssignedModels(Constants.MT_VAL_ADD_CHN_DGM); 
      if(assignChildModel.length > 0)
      {
        displayPDM(startObjBPD.ObjDef(), assignChildModel[0]);
      }
    }
    
   g_Output.value.EndTable("", 100, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);   

    g_Output.value.OutputField(Constants.FIELD_NEWPAGE,"Arial",10,Constants.C_BLACK,Constants.C_WHITE,Constants.FMT_LEFT);
}

function displayPDM(assignedModelObject, assignedModel)
{
    var arrProcessData = new Array();
    
    if(assignedModelObject.GUID() != "1a2151a9-6837-11e6-3c7c-005056bd5e68")
    {
        var assignedChildModelVACDL2 = assignedModelObject.AssignedModels([Constants.MT_VAL_ADD_CHN_DGM]);
        
        if(assignedChildModelVACDL2.length > 0)
        {
            var functionsInVACDL3 = findFunctionsinVACD(assignedChildModelVACDL2[0],assignedModelObject);
            functionsInVACDL3 = ArisData.sort(functionsInVACDL3,Constants.AT_ID,g_nloc);  
            
            if (functionsInVACDL3.length>0){
                for (var f=0; f<functionsInVACDL3.length; f++){
                    var oProcessData = new Data_Process();
                    oProcessData.Process = functionsInVACDL3[f];
                    oProcessData.subProcess = new Array();
                    oProcessData.document = new Array();                    
                    
                    var listassignFAD = new Array();
                    
                    var assignedChildModelFADL3 = functionsInVACDL3[f].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
                    if(assignedChildModelFADL3.length > 0)
                    {
                        listassignFAD.push(assignedChildModelFADL3[0]);
                    }
                    
                    var assignedChildModelVACDL4 = functionsInVACDL3[f].AssignedModels([Constants.MT_VAL_ADD_CHN_DGM]);
                    
                    if(assignedChildModelVACDL4.length > 0)
                    {
                        var functionsInVACDL4 = findFunctionsinVACD(assignedChildModelVACDL4[0],functionsInVACDL3[f]);
                        functionsInVACDL4 = ArisData.sort(functionsInVACDL4,Constants.AT_ID,g_nloc);
                        
                        for(var g = 0 ; g <functionsInVACDL4.length; g++)
                        {
                             oProcessData.subProcess.push(functionsInVACDL4[g]);
                             
                             var assignedChildModelFADL4 = functionsInVACDL4[g].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
                             if(assignedChildModelFADL4.length > 0)
                             {
                                listassignFAD.push(assignedChildModelFADL4[0]); 
                             }
                        }
                    }

                    
                    for (var i=0; i<listassignFAD.length; i++){
                        var oDocuemnts = getDocs(listassignFAD[i]);
                        
                        for (var j=0; j<oDocuemnts.length; j++){
                            if (arrIndexOf(oProcessData.document, oDocuemnts[j])==-1){
                                oProcessData.document.push(oDocuemnts[j]);
                            }
                        }
                    }
                    
                    arrProcessData.push(oProcessData);
                }    
            }
        }    
    
    for (var a=0; a<arrProcessData.length; a++){
        g_Output.value.TableRow();
        g_Output.value.TableCell(arrProcessData[a].Process.Name(g_nloc), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        g_Output.value.TableCell(convertArrayToString1(arrProcessData[a].subProcess, "\n"), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        g_Output.value.TableCell("", 40, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        
        var sNonLinkedDoc = "";
        
        for (var b=0; b<arrProcessData[a].document.length; b++){
            var sID = arrProcessData[a].document[b].Attribute(Constants.AT_ID,g_nloc).getValue()
            var sTitle = arrProcessData[a].document[b].Attribute(Constants.AT_TITL1,g_nloc).getValue()
            var sLink = arrProcessData[a].document[b].Attribute(Constants.AT_EXT_1,g_nloc).getValue()
            //g_Output.value.OutputLink("\u2022 " + sID + " " + sTitle + "\n", sLink);
            if (arrProcessData[a].document[b].Attribute(Constants.AT_EXT_1,g_nloc).IsMaintained()){
                g_Output.value.OutputLink("\u2022 " + sID + " " + sTitle + "\n", sLink, "Arial", 10, Constants.C_BLUE, Constants.C_WHITE, Constants.FMT_LEFT);
            }else{
                sNonLinkedDoc = sNonLinkedDoc + "\u2022 " + sID + " " + sTitle + "\n";
            }
        }
        g_Output.value.OutputLn(sNonLinkedDoc, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0);

    }
    
    }
}

function displayPDML1(assignedModelObject)
{
    var arrProcessData = new Array();
    var functionsInVACDL3 = assignedModelObject;
    
    //var assignedChildModelFADL3 = functionsInVACDL3.AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
/*     if(assignedChildModelFADL3.length > 0)
    {
        listassignFAD.push(assignedChildModelFADL3[0]);
    } */
    
    var assignedChildModelVACDL4 = functionsInVACDL3.AssignedModels([Constants.MT_VAL_ADD_CHN_DGM]);
    
    if(assignedChildModelVACDL4.length > 0)
    {
        var functionsInVACDL4 = findFunctionsinVACD(assignedChildModelVACDL4[0],functionsInVACDL3);
        functionsInVACDL4 = ArisData.sort(functionsInVACDL4,Constants.AT_ID,g_nloc);
        
        for(var g = 0 ; g <functionsInVACDL4.length; g++)
        {
            var oProcessData = new Data_Process();
            oProcessData.Process = functionsInVACDL3;
            oProcessData.subProcess = new Array();
            oProcessData.document = new Array();              
             
             var listassignFAD = new Array();
             
             oProcessData.subProcess.push(functionsInVACDL4[g]);
             
             var assignedChildModelFADL4 = functionsInVACDL4[g].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
             if(assignedChildModelFADL4.length > 0)
             {
                listassignFAD.push(assignedChildModelFADL4[0]); 
             }

            for (var i=0; i<listassignFAD.length; i++){
                var oDocuemnts = getDocs(listassignFAD[i]);
                
                for (var j=0; j<oDocuemnts.length; j++){
                    if (arrIndexOf(oProcessData.document, oDocuemnts[j])==-1){
                        oProcessData.document.push(oDocuemnts[j]);
                    }
                }
            }
            
            arrProcessData.push(oProcessData);
        }
    }
    
    for (var a=0; a<arrProcessData.length; a++){
        g_Output.value.TableRow();
        g_Output.value.TableCell(arrProcessData[a].Process.Name(g_nloc), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        g_Output.value.TableCell(convertArrayToString1(arrProcessData[a].subProcess, "\n"), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        g_Output.value.TableCell("", 40, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VTOP, 0);
        
        var sNonLinkedDoc = "";
        
        for (var b=0; b<arrProcessData[a].document.length; b++){
            var sID = arrProcessData[a].document[b].Attribute(Constants.AT_ID,g_nloc).getValue()
            var sTitle = arrProcessData[a].document[b].Attribute(Constants.AT_TITL1,g_nloc).getValue()
            var sLink = arrProcessData[a].document[b].Attribute(Constants.AT_EXT_1,g_nloc).getValue()
            //g_Output.value.OutputLink("\u2022 " + sID + " " + sTitle + "\n", sLink);
            if (arrProcessData[a].document[b].Attribute(Constants.AT_EXT_1,g_nloc).IsMaintained()){
                g_Output.value.OutputLink("\u2022 " + sID + " " + sTitle + "\n", sLink, "Arial", 10, Constants.C_BLUE, Constants.C_WHITE, Constants.FMT_LEFT);
            }else{
                sNonLinkedDoc = sNonLinkedDoc + "\u2022 " + sID + " " + sTitle + "\n";
            }
        }
        g_Output.value.OutputLn(sNonLinkedDoc, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0);

    }

}


/*
function displayPDM(assignedModelObject, assignedModel)
{
   g_Output.value.TableRow();
   g_Output.value.TableCell(assignedModelObject.Name(g_nloc), 30, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
   
   checkReferencesAttachments(assignedModel);
   
   if(assignedModelObject.GUID() != "1a2151a9-6837-11e6-3c7c-005056bd5e68")
   {
     var assignedChildModelVACDL2 = assignedModelObject.AssignedModels([Constants.MT_VAL_ADD_CHN_DGM]);
     var assignedChildModelFADL2 = assignedModelObject.AssignedModels([Constants.MT_FUNC_ALLOC_DGM]);
     var listassignFAD = new Array();
     
     if(assignedChildModelFADL2.length > 0)
     {
       listassignFAD.push(assignedChildModelFADL2[0]);   
     }
     
     if(assignedChildModelVACDL2.length > 0)
     {
       checkReferencesAttachments(assignedChildModelVACDL2[0]);
       g_Output.value.TableCell("", 30, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT , 0);
             
       //var functionsInVACDL3 = findFunctionsinVACD(assignedChildModelVACDL2[0],assignedModelObject.Name(g_nloc));
       
       var functionsInVACDL3 = findFunctionsinVACD(assignedChildModelVACDL2[0],assignedModelObject);
       functionsInVACDL3 = ArisData.sort(functionsInVACDL3,Constants.SORT_X,g_nloc);// sort by X-coordinate 
       
       var listProcedure = new Array();
       var listFormRecordWI = new Array();
       //var listassignFAD = new Array();
             
       for(var f = 0 ; f <= functionsInVACDL3.length - 1; f++)
       { 
         g_Output.value.OutputLn(functionsInVACDL3[f].Name(g_nloc), "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY, 0); 
         var assignedChildModelFADL3 = functionsInVACDL3[f].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
         if(assignedChildModelFADL3.length > 0)
         {
           listassignFAD.push(assignedChildModelFADL3[0]); 
         }
       
         var assignedChildModelVACDL4 = functionsInVACDL3[f].AssignedModels([Constants.MT_VAL_ADD_CHN_DGM]);
         
         if(assignedChildModelVACDL4.length > 0)
         {
           checkReferencesAttachments(assignedChildModelVACDL4[0]);
           //var functionsInVACDL4 = findFunctionsinVACD(assignedChildModelVACDL4[0],functionsInVACDL3[f].Name(g_nloc));
           
           var functionsInVACDL4 = findFunctionsinVACD(assignedChildModelVACDL4[0],functionsInVACDL3[f]);
           functionsInVACDL4 = ArisData.sort(functionsInVACDL4,Constants.SORT_X,g_nloc);// sort by X-coordinate        
           for(var g = 0 ; g <= functionsInVACDL4.length - 1; g++)
           {
             g_Output.value.OutputLn("*" + functionsInVACDL4[g].Name(g_nloc), "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY, 0);   
             var assignedChildModelFADL4 = functionsInVACDL4[g].AssignedModels(Constants.MT_FUNC_ALLOC_DGM);
             if(assignedChildModelFADL4.length > 0)
             {
              listassignFAD.push(assignedChildModelFADL4[0]); 
             }
           }
         }
       } 
             
       if(listassignFAD.length > 0)
       {
         for(var q = 0 ; q <= listassignFAD.length - 1; q++)
         {
           checkReferencesAttachments(listassignFAD[q]);
         }
             
          if(referencesInBPD.length > 0)
          {  
           g_Output.value.TableCell("", 30, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT , 0);
           for(var t = 0; t <= referencesInBPD.length-1; t++)
           {
             g_Output.value.OutputLn(referencesInBPD[t].Name(g_nloc), "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0); 
           }
          }
          else
          {
           g_Output.value.TableCell("", 30, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);  
          }
               
          if(attachmentsInBPD.length > 0)
          {
            g_Output.value.TableCell("", 20, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT , 0);
            for(var w = 0; w <= attachmentsInBPD.length-1; w++)
            {
              g_Output.value.OutputLn(attachmentsInBPD[w].Name(g_nloc), "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0); 
            }
           }
          else
          {
            g_Output.value.TableCell("", 20, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);  
          }
        }
        else
        {
         g_Output.value.TableCell("", 30, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
         g_Output.value.TableCell("", 20, "Arial",  11, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);      
        }
     }
   }
}
*/

function referencesAttachements(listReferences,listAttachments)
{

    listReferences = ArisData.sort(listReferences,Constants.AT_NAME,g_nloc);
    listAttachments = ArisData.sort(listAttachments,Constants.AT_NAME,g_nloc);
    
    g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
    g_Output.value.OutputLnF("REFERENCES & ATTACHMENTS",FONT_STYLE_HEADING_1);
    g_Output.value.EndParagraph();   
    
    if(listReferences.length > 0)
    {
      g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
      g_Output.value.OutputLnF("REFERENCES",FONT_STYLE_HEADING_2);
      g_Output.value.EndParagraph();  
      g_Output.value.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);
      g_Output.value.TableRow();
      g_Output.value.TableCell("Document No.", 30, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      g_Output.value.TableCell("Title", 70, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      
      for(var a = 0; a <= listReferences.length-1; a++)  
      {
        var refDocNum = listReferences[a].Name(g_nloc);
        var refDocTitle = listReferences[a].Attribute(942,g_nloc).getValue();
        g_Output.value.TableRow();  
        g_Output.value.TableCell(refDocNum, 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
        g_Output.value.TableCell(refDocTitle, 70, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      }
      g_Output.value.EndTable("", 87, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_JUSTIFY | Constants.FMT_BOLD, 0);
    }
    
    if(listAttachments.length > 0)
    {
      g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
      g_Output.value.OutputLnF("ATTACHMENTS",FONT_STYLE_HEADING_2);
      g_Output.value.EndParagraph(); 
      
      for(var b = 0; b <= listAttachments.length-1; b++)
      {
        var attachName = listAttachments[b].Name(g_nloc);
        var attachLink = listAttachments[b].Attribute(152,g_nloc).getValue();
        
        if((attachLink != null) && (attachLink != "") && (attachLink != " "))
        {
          g_Output.value.OutputLink("\u2022 " + attachName + "\n", attachLink); 
        }
        else
        {
          g_Output.value.OutputLn("\u2022 " + attachName + "\n", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0);  
        }
      }
    }
}

function references(oItemOcc)
{
    var oFADs = oItemOcc.ObjDef().AssignedModels([Constants.MT_FUNC_ALLOC_DGM]);
    
    g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_1);
    g_Output.value.OutputLnF("REFERENCES & ATTACHMENTS",FONT_STYLE_HEADING_1);
    g_Output.value.EndParagraph(); 

      g_Output.value.BeginParagraphF(FONT_STYLE_HEADING_2);
      g_Output.value.OutputLnF("REFERENCES",FONT_STYLE_HEADING_2);
      g_Output.value.EndParagraph();  
      g_Output.value.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_JUSTIFY, 0);
      g_Output.value.TableRow();
      g_Output.value.TableCell("Document No.", 30, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
      g_Output.value.TableCell("Title", 70, "Arial", 10, Constants.C_WHITE, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    
    if (oFADs.length == 1){
        var oReferences = oFADs[0].ObjOccListBySymbol([Constants.ST_INF_SERV]);
        oReferences = ArisData.sort(oReferences,Constants.AT_ID, g_nloc);
        
        for(var a = 0; a < oReferences.length; a++) {
            var refDocTitle = oReferences[a].ObjDef().Attribute(Constants.AT_TITL1, g_nloc).getValue();
            
            if (oReferences[a].ObjDef().Attribute(Constants.AT_EXT_1, g_nloc).IsMaintained()){
                var refDocLink = oReferences[a].ObjDef().Attribute(Constants.AT_EXT_1, g_nloc).getValue();
                g_Output.value.TableRow();  
                g_Output.value.TableCell(oReferences[a].ObjDef().Attribute(Constants.AT_ID, g_nloc).getValue(), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
                g_Output.value.TableCell("", 70, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
                g_Output.value.OutputLink(refDocTitle, refDocLink, "Arial", 10, Constants.C_BLUE, Constants.C_WHITE, Constants.FMT_LEFT);
                
                
            }else{
                g_Output.value.TableRow();  
                g_Output.value.TableCell(oReferences[a].ObjDef().Attribute(Constants.AT_ID, g_nloc).getValue(), 30, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
                g_Output.value.TableCell(refDocTitle, 70, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.C_TRANSPARENT, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
            
            }
        }
        
    }

    g_Output.value.EndTable("", 100, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_JUSTIFY | Constants.FMT_BOLD, 0);
    
}

function getHTMLLink(oItem){
    
    var sResult = "";
    var sPublisherServer = "http://ADARISVSR01.borouge.corp.co/aris/apgstatic/export/";
    
    sResult = sPublisherServer + "m" + oItem.GUID() + "_nav.htm";
    
    return sResult;
}

function convertArrayToString(arrItems, sDelim){
    var sTemp = "";
    
    for (var i=0; i<arrItems.length; i++){
        sTemp = sTemp + arrItems[i].ObjDef().Name(g_nloc);
        
        if ((arrItems.length-1)==i){
            break;
        }
        
        sTemp = sTemp + sDelim;
    }
    
    
    return sTemp;
}

function convertArrayToString1(arrItems, sDelim){
    var sTemp = "";
    
    for (var i=0; i<arrItems.length; i++){
        sTemp = sTemp + "\u2022 " + arrItems[i].Name(g_nloc);
        
        if ((arrItems.length-1)==i){
            break;
        }
        
        sTemp = sTemp + sDelim;
    }
    
    
    return sTemp;
}

function arrIndexOf(arrItem, oItem){
    for (var i=0; i<arrItem.length; i++){
        if (arrItem[i].IsEqual(oItem)){
            return i;
        }
    
    }
    
    return -1;
}

/****************************************
*
*   OUTPUT DOC SECTION:
*
****************************************/
/** Apply default page format settings to output object
* @param {Output} outputObj The output object
*/
function preparePrintOut(scopeofVACD, purposeofVACD, effDateofVACD, versionofVACD, ownerofVACD, docNumofVACD, nameofVACD){
    g_Output.value = Context.createOutputObject(Context.getSelectedFormat(), Context.getSelectedFile());
//  g_Output.value.Init(g_nloc);
    g_Output.value.DefineF(FONT_STYLE_INFO, FONT_TYPE, 14, FONT_STD_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_BOLD | Constants.FMT_CENTER| Constants.FMT_VTOP, 0, 0, 1.76, 8.82, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_TITLE, FONT_TYPE, 21, FONT_STD_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_BOLD | Constants.FMT_CENTER| Constants.FMT_VTOP, 0, 0, 1.76, 8.82, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_NORMAL, FONT_TYPE, FONT_STYLE_NORMAL_SIZE, FONT_STD_COLOR, Constants.C_TRANSPARENT,  FONT_STYLE_NORMAL_FMT, 0, 0, FONT_STYLE_NORMAL_PRGPH_SPACE_BEFORE, FONT_STYLE_NORMAL_PRGPH_SPACE_AFTER, 0, FONT_STYLE_NORMAL_PRGPH_LINE_SPACE);
    g_Output.value.DefineF(FONT_STYLE_HEADING_4, FONT_TYPE, FONT_STYLE_HEADING_4_SIZE, FONT_STYLE_HEADING_4_COLOR, Constants.C_TRANSPARENT, FONT_STYLE_HEADING_4_FMT, 5, 5, FONT_STYLE_HEADING_4_PRGPH_SPACE_BEFORE, FONT_STYLE_HEADING_4_PRGPH_SPACE_AFTER, 2, FONT_STYLE_HEADING_1_PRGPH_LINE_SPACE);
    g_Output.value.DefineF(FONT_STYLE_HEADING_3, FONT_TYPE, FONT_STYLE_HEADING_3_SIZE, FONT_STYLE_HEADING_3_COLOR, Constants.C_TRANSPARENT, FONT_STYLE_HEADING_3_FMT, 20, 10, 5, 1, 2, FONT_STYLE_HEADING_2_PRGPH_LINE_SPACE);
    g_Output.value.DefineF(FONT_STYLE_HEADING_2, FONT_TYPE, FONT_STYLE_HEADING_2_SIZE, FONT_STYLE_HEADING_2_COLOR, Constants.C_TRANSPARENT, FONT_STYLE_HEADING_2_FMT, 15, 10, 5, 1, 2, FONT_STYLE_HEADING_3_PRGPH_LINE_SPACE);
    g_Output.value.DefineF(FONT_STYLE_HEADING_1, FONT_TYPE, FONT_STYLE_HEADING_1_SIZE, FONT_STYLE_HEADING_1_COLOR, Constants.C_TRANSPARENT, FONT_STYLE_HEADING_1_FMT , 10, 10, 5, 1, 2, FONT_STYLE_HEADING_4_PRGPH_LINE_SPACE);
    g_Output.value.DefineF(FONT_STYLE_TABLE_HEADER, FONT_TYPE,FONT_STYLE_NORMAL_SIZE, FONT_STYLE_TABLE_HEADER_COLOR, BACKGROUND_STYLE_TABLE_HEADER_COLOR,  Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VTOP, 0, 0, 0, 0, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_TABLE_CONTENT, FONT_TYPE, FONT_STYLE_NORMAL_SIZE, Constants.C_BLACK, Constants.C_TRANSPARENT,  Constants.FMT_LEFT| Constants.FMT_VTOP, 0, 0, 0, 0, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_PAGE_HEADER_LEFT, FONT_TYPE, FONT_STYLE_PAGE_HEADER_SIZE, FONT_STYLE_PAGE_HEADER_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_BOLD | Constants.FMT_LEFT| Constants.FMT_VTOP, 0, 0, 0, 0, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_PAGE_HEADER_RIGHT, FONT_TYPE, FONT_STYLE_PAGE_HEADER_SIZE, FONT_STYLE_PAGE_HEADER_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_BOLD | Constants.FMT_RIGHT| Constants.FMT_VTOP, 0, 0, 0, 0, 0, 1);
    g_Output.value.DefineF(FONT_STYLE_BULLET_LIST, FONT_TYPE, FONT_STYLE_NORMAL_SIZE, FONT_STYLE_TABLE_CONTENT_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_LEFT| Constants.FMT_VTOP, 0, 0, 0, 0, 0, 1);
    g_Output.value.DefineF("Template1","Arial", 11,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT ,15,15,5,5,5,0);
    g_Output.value.DefineF("Template2","Arial", 12,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_JUSTIFY ,15,15,5,5,5,0);
    g_Output.value.DefineF("Template3","Arial", 09,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY ,15,15,5,0,0,0);
    g_Output.value.DefineF("Template4","Arial", 10,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_JUSTIFY,15,15,5,0,0,0);
    g_Output.value.DefineF("Template5","Arial Narrow", 10,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_CENTER,15,15,5,0,0,0);
    g_Output.value.DefineF("ListTemplate","Arial", 8,Constants.C_BLACK, RGB(192,192,192), Constants.FMT_LEFT,0,0,0,0,0,0);
    g_Output.value.DefineF("Terminology Content","Arial", 11,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY,10,10,1,1,0,0);
    g_Output.value.DefineF("Process Content","Arial", 11,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY | Constants.FMT_ITALIC,10,10,1,1,0,0);
    g_Output.value.DefineF("Header Content","Arial", 11,Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_JUSTIFY | Constants.FMT_BOLD,10,10,1,1,0,0);
    g_Output.value.DefineF("ListTemplateHeader","Arial", 8,Constants.C_BLACK, RGB(192,192,192), Constants.FMT_BOLD | Constants.FMT_LEFT,0,0,0,0,0,0);
    setupOutputObject(g_Output.value, scopeofVACD, purposeofVACD, effDateofVACD, versionofVACD, ownerofVACD, docNumofVACD, nameofVACD);
    g_Output.value.SetTitle(Context.getScriptInfo(Constants.SCRIPT_NAME));
}

function setupOutputObject(outputObj, scopeofVACD, purposeofVACD, effDateofVACD, versionofVACD, ownerofVACD, docNumofVACD, nameofVACD){
    
    outputObj.SetPageWidth(210.1);
    outputObj.SetPageHeight(297.2);
    outputObj.SetLeftMargin(10);
    outputObj.SetRightMargin(10);
    outputObj.SetTopMargin(2);
    outputObj.SetBottomMargin(4);
    outputObj.SetDistHeader(9);
    outputObj.SetDistFooter(10);
    outputObj.SetAutoTOCNumbering(true);
    
    //var oHouseModel = db.FindGUID("6db7c310-7e28-11e6-1532-005056c00001")
    //var image = oHouseModel.Graphic(true, false, g_nloc, true);
      
    var imageData = Context.getFile("BPD-Borouge.png", Constants.LOCATION_SCRIPT);
    var image = Context.createPicture(imageData, Constants.IMAGE_FORMAT_PNG);
  
    outputObj.BeginSection(297.2, 210.1, 9, 10, 10, 10, 2, 6, false, Constants.SECTION_INDEX);
    outputObj.OutputLnF("","Template1");  
    
    outputObj.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_LEFT, 0);
    outputObj.TableRow();
    outputObj.ResetFrameStyle();
    outputObj.TableCell("", 100, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.OutGraphic(image, -1, g_Output.value.getCurrentMaxWidth(), g_Output.value.GetPageHeight());
    
    
    outputObj.BeginTable(100, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_LEFT, 0);
    outputObj.TableRow();
    outputObj.TableCell("DOCUMENT TITLE", 26.4, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.TableCell(nameofVACD, 73.6, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.EndTable("", 90, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);  
    
    outputObj.BeginTable(90, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_LEFT, 0);
    outputObj.TableRow();
    outputObj.TableCell("OWNER", 26.4, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    //outputObj.TableCell(ownerofVACD, 73.6, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.TableCell("$FirstApprover$" + "\n" + "$SecondApprover$", 73.6, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);

    outputObj.EndTable("", 90, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0); 
    
    outputObj.BeginTable(90, STYLE_TABLE_FRAME_COLOR, Constants.C_TRANSPARENT,  Constants.FMT_LEFT, 0);
    outputObj.TableRow();
    outputObj.TableCell("EFFECTIVE DATE FOR IMPLEMENTATION", 26.4, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    //outputObj.TableCell(effDateofVACD, 15, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.TableCell("$ImplDate$", 15, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    
    outputObj.TableCell("VERSION", 15, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    //outputObj.TableCell(versionofVACD, 7, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.TableCell("$VN$", 7, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    
    outputObj.TableCell("DOCUMENT NUMBER", 20, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_CENTER | Constants.FMT_VCENTER, 0);
    //outputObj.TableCell(docNumofVACD, 23, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    outputObj.TableCell("$DocNo#" +  docNumofVACD + "#DocNo$", 23, "Arial", 10, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT | Constants.FMT_VCENTER, 0);
    
    outputObj.EndTable("", 90, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0); 

    outputObj.EndTable("", 120, FONT_TYPE, FONT_TABLE_SUBTITLE_SIZE, FONT_TABLE_SUBTITLE_COLOR, Constants.C_TRANSPARENT, 0, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);  
    
    outputObj.OutputLnF("", "Template2");
    
    outputObj.OutputLnF("PURPOSE:", "Template2");
    outputObj.OutputLnF(purposeofVACD,"Template1");
    
    outputObj.OutputLnF("", "Template2"); 
    
    outputObj.OutputLnF("SCOPE:", "Template2");   
    outputObj.OutputLnF(scopeofVACD,"Template1");
    
    outputObj.OutputLnF("", "Template2");   
    
    
    for (var i=0; i<4; i++){
        outputObj.OutputLnF("","Template1");
    }
       
    outputObj.OutputLnF("Copyright " + "\u00A9" + " Borouge","Template4");
    outputObj.OutputLnF("This document is the property of Abu Dhabi Polymers Co. Ltd., P.O. Box 6925 Abu Dhabi, United Arab Emirates and Borouge Pte. Ltd. 1 George Street #18-01, Singapore 049145. All rights reserved. Neither the whole nor any part of this document must be copied or used without the prior written consent of the Company Chief Executives.","Template3");
    
    globalFooter(outputObj);
    
    outputObj.EndSection();  
    
    outputObj.BeginSection(297.2, 210.1, 9, 10, 10, 10, 2, 6, false, Constants.SECTION_INDEX);
    globalHeader(outputObj,nameofVACD, docNumofVACD, versionofVACD);
    //Defines the style for the four levels in the TOC
    outputObj.SetTOCFormat(0, "Arial", 12, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 0, 0, 0, 0, 0, 2);
    outputObj.SetTOCFormat(1, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 5, 5, 2, 1, 0, 2);
    outputObj.SetTOCFormat(2, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 10, 5, 2, 1, 0, 2);
    outputObj.SetTOCFormat(3, "Arial", 9, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT, 15, 5, 2, 1, 0, 2);
    //Output text
    outputObj.OutputLn("TABLE OF CONTENTS", "Arial", 12, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_CENTER | Constants.FMT_BOLD, 0);
    //Adds the table of content
    outputObj.OutputField(Constants.FIELD_TOC, "Arial", 10, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_LEFT);
    outputObj.EndSection();  
}

function globalHeader(outputObj,nameofVACD, docNumofVACD, versionofVACD){
    outputObj.BeginHeader();
   /* outputObj.BeginParagraphF(FONT_STYLE_PAGE_HEADER_LEFT);
    outputObj.Output("Doc. No.: " + docNumofVACD, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_LEFT,0);
    outputObj.OutputLn("Version: " + versionofVACD , "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT,0);
    outputObj.Output("Document Title: " + nameofVACD + " Business Process", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_LEFT,0);
    
    outputObj.Output("Page ", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT,0);
    outputObj.OutputField(Constants.FIELD_PAGE, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT);
    outputObj.Output(" of ", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT,0);
    outputObj.OutputField(Constants.FIELD_NUMPAGES, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT);
    outputObj.EndParagraph();*/
    
    outputObj.BeginTable(100, Constants.C_BLACK, Constants.C_TRANSPARENT, Constants.FMT_LEFT, 0);
    outputObj.TableRow();
    //outputObj.TableCell("Doc. No.: " + docNumofVACD, 80, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT, 0);
    //outputObj.TableCell("Version: " + versionofVACD , 20, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_RIGHT, 0);
    outputObj.TableCell("Doc. No.: " + "$DocNo$", 80, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT, 0);
    outputObj.TableCell("Version: " + "$VN$" , 20, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_RIGHT, 0);

    outputObj.TableRow();
    outputObj.TableCell("Document Title: " + nameofVACD, 80, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_LEFT, 0);
    outputObj.TableCell("", 20, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_BOLD | Constants.FMT_RIGHT, 0);
    outputObj.Output("Page ", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT,0);
    outputObj.OutputField(Constants.FIELD_PAGE, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT);
    outputObj.Output(" of ", "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT,0);
    outputObj.OutputField(Constants.FIELD_NUMPAGES, "Arial", 11, Constants.C_BLACK, Constants.C_WHITE, Constants.FMT_BOLD | Constants.FMT_RIGHT);
    outputObj.EndTable("", 100, "Arial", 11, Constants.C_BLACK, Constants.C_TRANSPARENT, 0, Constants.FMT_LEFT | Constants.FMT_VTOP, 0); 
    outputObj.OutputLnF("", "Terminology Content");
    outputObj.EndHeader();
    
}


function globalFooter(outputObj) {
    outputObj.BeginFooter();
    outputObj.BeginParagraphF("Template2");
    outputObj.OutputLnF("It is the responsibility of the user to ensure that they are using the latest revision of this document.","Template5");
    outputObj.EndParagraph();
    outputObj.EndFooter();
}

function RGB(r, g, b) {
    return (new java.awt.Color(r/255.0,g/255.0,b/255.0,1)).getRGB() & 0xFFFFFF
} 

main();
