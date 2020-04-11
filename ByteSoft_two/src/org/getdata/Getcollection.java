package org.getdata;

import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.altertable.DeleteColllectionData;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Addtable;
import DateBase.DateBase_Gettable;
import net.sf.json.JSONObject;
import net.sf.json.JSONArray;

public class Getcollection implements Controller {
	
	
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		PrintWriter out = response.getWriter(); // ��ȡ response �������	
		JSONObject json=null;
		String read=Json.SetJson(request.getReader());
		try {			
		      json = JSONObject.fromObject(read);
		      System.out.println("App�˵�Json����"+json);
		}catch (Exception e) {
			e.printStackTrace();
		}
        
		if("POST".equals(Method)) {	
			System.out.println("---POST��������---");
			JSONArray jsonArr=new JSONArray();
			if(json!=null) {			
				List list=DateBase_Gettable.GetCollection(json);
				if(list.size()>0) {
					for(int i=0;i<list.size();i++) {
						//String num=(String)list.get(i);
//						JSONObject jsonObj = new JSONObject();
//						jsonObj=DateBase_Gettable.getGymnasium((String)list.get(i));
//						System.out.println((String)list.get(i));
						
						String gymnasiumId=(String)list.get(i);
						System.out.println(gymnasiumId);
						jsonArr.add(DateBase_Gettable.getGymnasium(gymnasiumId));
					}					
				}				
			}
			else {			
			}
			response.getWriter().append(jsonArr.toString());
		}else {
			System.out.println("---GET��������---");
		}		
		return null;
	}

}
