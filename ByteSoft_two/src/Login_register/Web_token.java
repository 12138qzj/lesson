package Login_register;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import DateBase.DateBase_Login;
import net.sf.json.JSONObject;

public class Web_token implements Controller {
	private String code="";
	private String message="";
	private String token="";
	public Web_token() {}
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("\n\n�����web����,����������");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		/*
		 * �������������ȡJson��������֤�ı���
		 */
		System.out.println("��������ķ�����"+Method);
		if("POST".equals(Method))  {
			String read="";
			DateBase_Login TokenDate=new DateBase_Login();
			read=Json.SetJson(request.getReader());
	        JSONObject json = JSONObject.fromObject(read);
	        System.out.println("App�˵�Json���ݣ�"+json);
	        String account=json.getString("name");
	        String token1=json.getString("token");
	        System.out.println("����Json���˺ţ�"+account+"������Json������"+token1);
	        if(TokenDate.isToken(account, token1)) {
	        	code="200";
	        	message="û��ʧЧ";
	        	token=TokenDate.setToken(account);
	        	System.out.println("���µĳ����ӣ�"+token);
	        }
	        else {
	        	System.out.println("������ʧЧ�ˣ�����ȥ����");
	        	code="500";
	        	message="ʧЧ";
	        	token=null;
	        }
		}
		else {
			System.out.println("GET����");
			String query=request.getQueryString();
			System.out.println("GET��������ݣ�"+query);
			if(query==null) {
				System.out.println("������������⣬û������Դ");
				code = "300";
				message = "�˺��������ע���Сд";
				System.out.println("����ʧ�ܣ�");
			}
			else {
				
				code = "200";
				message = "����ɹ�";
				System.out.println("����ɹ���");
				System.out.println("�˺ţ�"+request.getParameter("name")+"���룺"+request.getParameter("password"));
			}
			
		}
		/*
		 * ���صı��ģ��������������
		 */
		JSONObject jsonObj2 = new JSONObject();
	       // jsonObj2.put("id",id);
		System.out.println("���ص����ݣ�״̬��"+code+" ����"+message+" ������"+token);
	        jsonObj2.put("code",code );
	        jsonObj2.put("message",message);
	        jsonObj2.put("token", token);
	       // String a=jsonObj2.toString();
	        response.getWriter().append(jsonObj2.toString());
		return null;
	}

}
