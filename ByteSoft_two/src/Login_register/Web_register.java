package Login_register;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Addtable;
import DateBase.DateBase_Login;
import net.sf.json.JSONObject;

public class Web_register implements Controller {
	private String code="";
	private String message="";
	private String token="";
	public Web_register() {}
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
				System.out.println("�����web����,ע�����");
				request.setCharacterEncoding("utf-8");
				response.setContentType("text/html;charset=utf-8");
				String Method=request.getMethod();
				/**
				 * ��ȡ������������Żص���ı���
				 */
				PrintWriter out = response.getWriter(); // ��ȡ response �������
				System.out.println("��������ķ�����"+Method);
				System.out.println("�����"+"POST".equals(Method));
				if("POST".equals(Method.toString()))  {
					String read="";
					DateBase_Login RegisterDate=new DateBase_Login();
					System.out.println("POST����");
					read=Json.SetJson(request.getReader());
			        System.out.println("��ӡread"+read);
			        JSONObject json = JSONObject.fromObject(read);
			        System.out.println("json"+json);
			        String account=json.getString("name");
			        String password=json.getString("password");
			        if(RegisterDate.isRegister(account, password)) {
			        	System.out.println("ע��ɹ�");
			        	code="200";
			        	message="ע��ɹ�";
			        	//DateBase_Addtable.AddUserinfo(account); qiu  ���Userinfo �������  ��ע�� 
			        }
			        else {
			        	System.out.println("ע��ʧ��");
			        	code="500";
			        	message="ע��ʧ��,�˺Ŵ���";
			        }
					System.out.println("�˺ţ�"+account+"���룺"+password);
				}
			else/* if("GET".equals(Method))*/{
					System.out.println("GET����");
					String query=request.getQueryString();
					System.out.println("GET��������ݣ�"+query);
					if(query==null) {
						System.out.println("������������⣬û������Դ");
					}
					else {
						System.out.println("�˺ţ�"+request.getParameter("name")+"���룺"+request.getParameter("password"));
					}
				}
				/*
				 * ���صı��ģ��������������
				 */
				JSONObject jsonObj2 = new JSONObject();
			       // jsonObj2.put("id",id);
				System.out.println("��������"+code+" "+message+" "+token);
			        jsonObj2.put("code",code );
			        jsonObj2.put("message",message);
			        response.getWriter().append(jsonObj2.toString());
		return null;
	}

}
