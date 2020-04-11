package Login_register;

import java.io.BufferedReader;
import java.io.PrintWriter;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.Json.Json;
import org.hibernate.Query;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.Login;
import org.table.Userinfo;

import DateBase.DateBaseInfomation;
import DateBase.DateBase_Login;
import DateBase.Icon_up;
import net.sf.json.JSONObject;

public class Web_login implements Controller {
	private String code = "";
	private String message = "";
	private String token="";
	private String Picture=null;
	private String NickName=null;
	private int Level=0;
	
	public Web_login() {}
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("�����web����,�������");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		/**
		 * ��ȡ������������Żص���ı���
		 */
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		        
		System.out.println("��������ķ�����"+Method);
		if( "POST".equals(Method.toString())) {
			System.out.println("��½����ɹ���"+Method);
		}
		if("POST".equals(Method.toString()))  {
			String read=""; //������Json����
			int login_int;  //����״̬��ѡ��
			DateBase_Login loginDate=new DateBase_Login();
			read=Json.SetJson(request.getReader());
	        JSONObject json = JSONObject.fromObject(read);
	        System.out.println("App�˵�Json����"+json);
	        String account=json.getString("name");
	        String password=json.getString("password");
//	        String account="123";
//	        String password="1245";
//	        String IconTime=json.getString("IconTime");
	        System.out.println("����Json���˺ţ�"+account+"����Json�����룺"+password);
	        login_int=loginDate.isLogin(account, password);  //��ѯ�û��Ƿ���ڣ�1���ڣ�0�������-1�û�������
	        if(login_int==-1) {
	        	code="404";
	        	message="�˺����벻����";
	        	token="";
	        	Picture=null;//ͷ��
	        }
	        else if(login_int==0) {
	        	code="500";
	        	message="�˺��������";
	        	token="";
	        	Picture=null;//ͷ��
	        }
	        else {
	        	code="200";
	        	message="����ɹ�";
	        	Userinfo userinfo=DateBaseInfomation.getMoreInfomation(account);
				System.out.println("��ѯ�ɹ�");
	        	token=loginDate.setToken(account);
	        	Picture=userinfo.getNavheader();//ͷ��
	        	NickName=userinfo.getNickname();  //�ǳ�
				Level=userinfo.getLevels();  //�ȼ�
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
		System.out.println("���صı��ģ�״̬"+code+" ����"+message+" ������"+token+" �Ƿ����ͷ��"+Picture+"�ǳ�"+NickName+"�ȼ�"+Level);
	        jsonObj2.put("code",code );
	        jsonObj2.put("message",message);
	        jsonObj2.put("token", token);
	        jsonObj2.put("Picture", Picture);
	        jsonObj2.put("NickName", NickName);
	        jsonObj2.put("Level", Level);
	        response.getWriter().append(jsonObj2.toString());        
		return null;
	}
}
