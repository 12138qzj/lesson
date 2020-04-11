package Login_register;

import java.io.PrintWriter;
import java.sql.Date;
import java.text.SimpleDateFormat;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.Json.Json;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;
import org.table.Userinfo;

import DateBase.DateBaseInfomation;
import net.sf.json.JSONObject;

public class MoreInfomation implements Controller {
	private String NickName=null;  //�ǳ�
	private String Signature=null;  //ǩ��
	private int Level=0;  //�ȼ�
	private String sex=null;  //�Ա�
	private String datetime=null;  //��������
	private String place=null;  //�ص�
	private String read=null;
	private String Picture=null;  //ͷ��ĵ�ַ
	public MoreInfomation() {}
	@Override
	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("�����web����,��ȡ��Ϣ����");
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		String Method=request.getMethod();
		System.out.println("��������ķ�����"+Method);
		PrintWriter out = response.getWriter(); // ��ȡ response �������
		if("POST".equals(Method))  {
			read=Json.SetJson(request.getReader());
	        System.out.println("��ӡread"+read);
	        JSONObject json = JSONObject.fromObject(read);
	        System.out.println("�����json"+json);
	        String account=json.getString("name");
			Userinfo userinfo=DateBaseInfomation.getMoreInfomation(account);
			System.out.println("��ѯ�ɹ�");
			NickName=userinfo.getNickname();  //�ǳ�
			Signature=userinfo.getSignature();  //ǩ��
			Level=userinfo.getLevels();  //�ȼ�
			sex=userinfo.getSex();  //�Ա�
			Picture=userinfo.getNavheader();//ͷ��
//			Date currentTime = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
			datetime = formatter.format(userinfo.getBirth());//����
			//datetime=String.userinfo.getBirth();  
			place=userinfo.getRegion();  //����
		}
		else {
			NickName=null;  //�ǳ�
			Signature=null;  //ǩ��
			Level=1;  //�ȼ�
			sex=null;  //�Ա�
			datetime=null;  //����
			place=null;  //����
		}
		System.out.println("�ǳ�"+NickName+"ǩ��"+Signature+"�ȼ�"+Level+"�Ա�"+sex+"����"+"����"+place+"ͷ��ĵ�ַ"+Picture);
		JSONObject jsonObj2 = new JSONObject();
	        jsonObj2.put("NickName",NickName );
	        jsonObj2.put("Signature",Signature);
	        jsonObj2.put("Level", Level);
	        jsonObj2.put("Sex", sex);
	        jsonObj2.put("Datetime", datetime);
	        jsonObj2.put("Place", place);
	        jsonObj2.put("Picture", Picture);
	        response.getWriter().append(jsonObj2.toString());
		return null;
	}

}
