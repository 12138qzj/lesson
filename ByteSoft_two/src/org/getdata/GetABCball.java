package org.getdata;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.hibernate.Query;
import org.hibernate.Session;
import org.ov.HibernateSessionFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.B;
import org.table.A;
import org.table.C;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class GetABCball  implements Controller{

	public B b;
	public A a;
	public C c;
	public Object temp;
	String str;
	String balltype,ballno;
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		
	
		System.out.println("�����web����,������Ϣ");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
//		String a="";
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
		
		JSONObject json=null;
		String read=Json.SetJson(request.getReader());
		try {
			
		      json = JSONObject.fromObject(read);
		      System.out.println("App�˵�Json����"+json);
		      balltype=json.getString("content_balltype");
		      ballno=json.getString("content_ballno");
		}catch (Exception e) {
			e.printStackTrace();
		}

		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		JSONArray jsonArr = new JSONArray();
		String placenum="";
		if(true/*"POST".equals(Method)*/) {			
			System.out.println("----POST��������------");
			System.out.println("����������Ϊ��"+ballno);
			Session session=HibernateSessionFactory.getSession();
			Query query = null;
			try {
				if(ballno==null) {
					System.out.println("����Ϊ��");
				}
				if(ballno!=null) {
					System.out.println("��������Ϊ��"+ballno+"��ʼ������...");
					List list;
					switch(balltype){
					case "��ë��"  :
						query=session.createQuery("from A where avno ="+ ballno);
						list=query.list();
						if(list.size()==0) {
							System.out.println("�޳�������");
						}
						else {			
							System.out.print("���ݴ��ڡ���������������");
							for (int i=0;i<list.size();i++) {
								a=(A)list.get(i);
								placenum=placenum+a.getAcno();
								//String str=(String)list.get(i);
								System.out.println("�ַ���Ϊ��"+a.getString());
								str=a.getString();
								JSONObject jsonObj = new JSONObject();
								jsonObj.put(a.getAcno(),a.getString());
								//System.out.println("�ַ���Ϊ��"+str);
								jsonArr.add(jsonObj);
							}
							jsonArr.add("{\"ballnum\":\""+placenum+"\"}");
			
						}
						break;
					case "����":
						query=session.createQuery("from B where bvno ="+ ballno);
						list=query.list();
						if(list.size()==0) {
							System.out.println("�޳�������");
						}
						else {			
							System.out.print("���ݴ��ڡ���������������");
							for (int i=0;i<list.size();i++) {
								b=(B)list.get(i);
								placenum=placenum+b.getBcno();
								//String str=(String)list.get(i);
								System.out.println("�ַ���Ϊ��"+b.getString());
								str=b.getString();
								JSONObject jsonObj = new JSONObject();
								jsonObj.put(b.getBcno(),b.getString());
								//System.out.println("�ַ���Ϊ��"+str);
								jsonArr.add(jsonObj);
							}
							jsonArr.add("{\"ballnum\":\""+placenum+"\"}");
			
						}
						break;
					case "����":
						query=session.createQuery("from C where cvno ="+ ballno);
						list=query.list();
						if(list.size()==0) {
							System.out.println("�޳�������");
						}
						else {			
							System.out.print("���ݴ��ڡ���������������");
							for (int i=0;i<list.size();i++) {
								c=(C)list.get(i);
								placenum=placenum+c.getCcno();
								//String str=(String)list.get(i);
								System.out.println("�ַ���Ϊ��"+c.getString());
								str=c.getString();
								JSONObject jsonObj = new JSONObject();
								jsonObj.put(c.getCcno(),c.getString());
								//System.out.println("�ַ���Ϊ��"+str);
								jsonArr.add(jsonObj);
							}
							jsonArr.add("{\"ballnum\":\""+placenum+"\"}");
			
						}
						break;
					case "����":
						query=session.createQuery("from B where bvno ="+ ballno);
						break;
					case "ƹ����":
						query=session.createQuery("from B where bvno ="+ ballno);
						break;
					default:
						query=null;						
					}
					
					
				
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		System.out.print("jsonArr��ֵ��"+jsonArr.toString());
		response.getWriter().append(jsonArr.toString());
		return null;
	}
}
			
