package org.getdata;

import java.util.HashSet;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.hibernate.Query;
import org.hibernate.Session;
import org.ov.HibernateSessionFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.Gymnasium;

import DateBase.DateBase_Gettable;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetSearchMain implements Controller{

	public Gymnasium gymnasium;
	String content="";
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("登入的web服务,更换信息");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		String read=""; //解析的Json报文	
		JSONObject json=null;
		read=Json.SetJson(request.getReader());
		try {
			
		      json = JSONObject.fromObject(read);
		      System.out.println("App端的Json数据"+json);
		      //content=json.getString("content");
		}catch (Exception e) {
			e.printStackTrace();
		}
  
			
		String Method=request.getMethod();
		System.out.println("数据请求的方法："+Method);
		JSONArray jsonArr = new JSONArray();
		if("POST".equals(Method)) {			
			System.out.println("----POST方法进入------");
			//System.out.println("搜索的内容为："+content);getSearchinfo
		List list=DateBase_Gettable.getSearchinfo(json.getString("type"), json.getString("timeday"),
					json.getString("time"), json.getString("room"));
		
		
		
//			for ( int i = 0 ; i < list.size() - 1 ; i ++ ) {
//				for ( int j = list.size() - 1 ; j > i; j-- ) {
//					if (list.get(j).equals(list.get(i))) {
//						list.remove(j);
//						}			
//			}
			
			HashSet h = new HashSet(list);   
			list.clear();   
			list.addAll(h); 
			
	
		
			for(int i=0;i<list.size();i++) {
				String gymnasiumId=(String)list.get(i);
				System.out.println(gymnasiumId);
				jsonArr.add(DateBase_Gettable.getGymnasium(gymnasiumId));
			}
									
		}else {
			System.out.println("----GET方法进入------");
		}
		
	        response.getWriter().append(jsonArr.toString());		
		return null;
	}
}