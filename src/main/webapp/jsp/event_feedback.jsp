<%@page import="com.pojo.MibMessage"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"+"web"+"/";
request.setAttribute("basePath", basePath);
%>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
	<title>event_feedback</title>
	<link rel="stylesheet" type="text/css" href="${basePath}/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="${basePath}/css/global.css">
	<style type="text/css">
     /*   .a{
         height: 50px;
         border:1px solid #ccc;
         width: 200px;
         background-color: #eee;
     }
      */
	</style>
</head>
<body >
    <div class="container header_background">
      <div class="row">
        <div class="col-md-6 col-xs-12 col-sm-6">
            <div class="logo_photo display_inline_block">
               <img src="${basePath}/hire_estate/images/logo.png" alt="logo">
            </div>
             <div class="title_container display_inline_block">
                <span class="h3"><strong>网络管理系统</strong></span>
                <span class="h4">中国科学技术大学</span>
             </div>
        </div>
       
        <div class="col-md-6 col-xs-12 col-sm-6 text_positon">
            <div class="logo_out display_inline_block">
              <img src="${basePath}/hire_estate/images/logo_out.png" alt="logo_out">
            </div>
            <div class="user_name display_inline_block">
              <span class="h4">监管员1</span>
            </div>
        </div>
      </div>
    </div>


<div class="container nav_background">
  <!--  <ul class="nav nav-tabs nav-justified">
       <li><div class="well well-lg">Bootstrap</div></li>
       <li><div class="well well-lg">Bootstrap</div></li>
       
       <li><div class="well well-lg">Bootstrap</div></li>
   </ul> -->
   <div class="row padding_dis0">
     <div class="col-md-2 col-lg-2"></div>
     <div class="col-md-2">
       <button class=" btn btn-success nav_background" id="event_waiting">
         <div>
           <img src="${basePath}/hire_estate/images/upload_event.png" alt="">
         </div>
         <span class="h4">获取设备信息</span>
       </button>
     </div>
     <div class="col-md-1"></div> 
     <div class="col-md-2">
        <button class="btn btn-success  color_5e9321">
         <div>
           <img src="${basePath}/hire_estate/images/feedback.png" alt="">
         </div>
         <span class="h4">设备自动报警信息</span>
       </button>
      <!--  <div class="well color_8cc34b">Bootstrap</div> -->
     </div>
     <div class="col-md-1"></div>
     <div class="col-md-2">
        <button class="btn btn-success nav_background" id="event_search">
         <div>
           <img src="${basePath}/hire_estate/images/search.png" alt="">
         </div>
         <span class="h4">设备信息查询</span>
       </button>
     <!--   <div class="well color_8cc34b">Bootstrap</div> -->
     </div>
     <div class="col-md-2"></div> 
   </div>
</div>


<div class="container form_background padding_dis ">
  <div class="padding_dis_2 white_background padding_bottom_1">
      <div class="row">

          <table class="table table-striped  table-hover">
              <thead>
                <tr>
                  <th>序号</th>
                  <th>计算机名称</th>
                  <th>硬件设备信息</th>
                  <th>系统时间</th>
                  <th>当前进程数</th>
                  <th>计算机内存</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              <c:forEach items="${mibList }" var="mibMessage" varStatus="status">
                <tr class="info">
                  <td>${status.index+1}</td>
                  <td>
                    <%-- <div class="thumbnail thumbnail_2">
                      <img src="${item_Event.item_Image0 }" alt="">
                    </div> --%>
                    ${mibMessage.computerNameString}
                  </td>
                  <td>${mibMessage.hardWareString}</td>
                  <td>${mibMessage.systemTimeString }</td>
                  <td>${mibMessage.onRunningThreed}</td>
                  <td>${mibMessage.computerMemorySizeString}</td>
                  <td></td>
                </tr>
               </c:forEach>
                <!-- <tr class="success">
                  <td>1</td>
                  <td>
                    <div class="thumbnail thumbnail_2">
                      <img src="images/logo.png" alt="">
                    </div>
                  </td>
                   <td>Q13030309</td>
                  <td>岱山片区-眀商西苑-6栋-3单元-2104室<br>屋面防水工程、有防水要求的卫生间、房屋和外墙面的防渗漏</td>
                   <td>2016-6-12</td>
                  <td>不予维修</td>
                  <td>交房时间早于2010年5月30日，不属于超期维保事件</td>
                </tr>
                <tr>
                  <td>1</td>
                 <td>
                    <div class="thumbnail thumbnail_2">
                      <img src="images/login_back.png" alt="">
                    </div>
                  </td>
                   <td>Q13030309</td>
                  <td>岱山片区-眀商西苑-6栋-3单元-2104室<br>屋面防水工程、有防水要求的卫生间、房屋和外墙面的防渗漏</td>
                   <td>2016-6-12</td>
                  <td>不予维修</td>
                  <td>交房时间早于2010年5月30日，不属于超期维保事件</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="thumbnail thumbnail_2">
                      <img src="images/login_back.png" alt="">
                    </div>
                  </td>
                   <td>Q13030309</td>
                  <td>岱山片区-眀商西苑-6栋-3单元-2104室<br>屋面防水工程、有防水要求的卫生间、房屋和外墙面的防渗漏</td>
                   <td>2016-6-12</td>
                  <td>不予维修</td>
                 <td>交房时间早于2010年5月30日，不属于超期维保事件</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="thumbnail thumbnail_2">
                      <img src="images/login_back.png" alt="">
                    </div>
                  </td>
                   <td>Q13030309</td>
                  <td>岱山片区-眀商西苑-6栋-3单元-2104室<br>屋面防水工程、有防水要求的卫生间、房屋和外墙面的防渗漏</td>
                   <td>2016-6-12</td>
                  <td>不予维修</td>
                  <td>交房时间早于2010年5月30日，不属于超期维保事件</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <div class="thumbnail thumbnail_2">
                      <img src="images/login_back.png" alt="">
                    </div>
                  </td>
                   <td>Q13030309</td>
                  <td>岱山片区-眀商西苑-6栋-3单元-2104室<br>屋面防水工程、有防水要求的卫生间、房屋和外墙面的防渗漏</td>
                   <td>2016-6-12</td>
                  <td>不予维修</td>
                  <td>交房时间早于2010年5月30日，不属于超期维保事件</td>
                </tr> -->
              </tbody>


          </table>


      </div>
  </div>
</div>


<div class="container form_background padding_dis_4 "  >
  <div class=" ">
      <div class="row">
          <div class="col-md-4">
            <div class="col-md-5">
              <span class="span_text_size">共&nbsp;&nbsp;<%-- ${totalNumbers } --%>&nbsp;&nbsp;条记录</span>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-5">
              <span  class="span_text_size">第&nbsp;<%-- ${pageNumber} --%>&nbsp;页/共&nbsp;<%-- ${pageCount } --%>&nbsp;页</span> 
            </div>
              
             
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4 text_align_right">
            <ul class="pagination pagination_margin">
              <li ><a href="Search_FeedBack?pageNumber=1">首页</a></li>
              <li ><a href="Search_FeedBack?pageNumber=<%-- ${pageNumber-1} --%>"> &laquo;</a></li>
              <li><a href="Search_FeedBack?pageNumber=<%-- ${pageNumber+1} --%>">&raquo;</a></li>
              
              <li><a href="Search_FeedBack?pageNumber=<%-- ${pageCount} --%>">尾页</a></li>
            </ul>
          </div>
          
 

      </div>
  </div>
</div>
   
     
  
  


	<script type="text/javascript" src="${basePath}/js/jquery.min.js" ></script>
	<script type="text/javascript" src="${basePath}/js/bootstrap.min.js"></script>
    <script type="text/javascript">
       $("document").ready(function(){
          // window.location.href=" /RuantiShiYan/ManagerServlet";
          $("#event_waiting").click(function(){
             window.location.href=" /RuantiShiYan/ManagerServlet";
          
          
          });
          
          $("#event_search").click(function(){
             window.location.href=" ${basePath}hire_estate/event_search.jsp";
          
          
          });
       
       });
    </script>
 
</body>
</html>