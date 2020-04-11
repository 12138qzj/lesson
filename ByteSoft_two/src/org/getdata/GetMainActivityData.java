package org.getdata;

import java.io.PrintWriter;
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
import org.table.Login;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetMainActivityData implements Controller{

	public Gymnasium gymnasium;
	String content="";
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
//		String read=""; //������Json����	
//		JSONObject json=null;
//		read=Json.SetJson(request.getReader());
//		try {
//			
//		      json = JSONObject.fromObject(read);
//		      System.out.println("App�˵�Json����"+json);
//		      content=json.getString("content");
//		}catch (Exception e) {
//			e.printStackTrace();
//		}
  
		
		
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);

		JSONArray jsonArr = new JSONArray();
		if("POST".equals(Method)) {			
			System.out.println("----POST��������------");
			Session session=HibernateSessionFactory.getSession();
			try {
				Query query=session.createQuery("from Gymnasium");
				
				System.out.println(query);
				List list=query.list();
				if(list.size()==0) {
					System.out.println("�޳�������");
				}
				else {					
					for (int i=0;i<list.size();i++) {	
						gymnasium=(Gymnasium)list.get(i);
						
						System.out.println("���ݱ��:"+gymnasium.getVno());
						System.out.println("��������:"+gymnasium.getVname());	
						System.out.println("��������:"+gymnasium.getVscore());
						
						System.out.println("���ݵ�ַ:"+gymnasium.getVaddress());
						
						JSONObject jsonObj = new JSONObject();
						
						jsonObj.put("���ݱ��",gymnasium.getVno());
				        jsonObj.put("������",gymnasium.getVname());
				        jsonObj.put("���ݵ�ַ",gymnasium.getVaddress());
				        
				       
				        
				        jsonObj.put("���ݸ�����",gymnasium.getVfunctioinary());
				        jsonObj.put("�����˵绰",gymnasium.getVphone());
				        jsonObj.put("����ͼƬ",gymnasium.getVpicture());
				        jsonObj.put("��������", gymnasium.getVscore());
				        jsonObj.put("����������", gymnasium.getVball());
				        
				        jsonObj.put("���ݷ���",gymnasium.getVserve());
				        jsonObj.put("���ݽ���",gymnasium.getVintroduce());
				        jsonObj.put("�µ���",gymnasium.getVsum());			        
				        jsonObj.put("�ذ�", gymnasium.getVfloor());
						
				       
				        jsonObj.put("�ƹ�",gymnasium.getVlighting());
				        jsonObj.put("��Ϣ��",gymnasium.getVrest());
				        jsonObj.put("����",gymnasium.getVsell());			        
				        jsonObj.put("������Ʒ����", gymnasium.getVsellsport());
				        
				        jsonObj.put("����", gymnasium.getVlocation());
				        jsonArr.add(jsonObj);
					}
					
					
			       System.out.println("JSON ַ:"+jsonArr.toString());
				}				
			}
			catch(Exception e) {
				e.printStackTrace();
			}
						
		}else {
			System.out.println("----GET��������------");
		}
		
	        response.getWriter().append(jsonArr.toString());		
		return null;
	}

}
