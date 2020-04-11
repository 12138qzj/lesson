package DateBase;

import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.ov.HibernateSessionFactory;
import org.table.Login;
import org.table.Userinfo;

public class DateBase_Login {
	public DateBase_Login() {}
	/**
	 * ������֤
	 * @param name �˺�
	 * @param Password ����
	 * @return -1�˺Ų����ڣ�0�˺��������1����ɹ�
	 * 
	 */
	public int isLogin(String name,String password) {
		Login table=new Login();
		Session session=HibernateSessionFactory.getSession();
		if((table=(Login)session.get(Login.class, name))==null) {
			System.out.println("��ѯ��������˺Ų�����");
			session.close();
			table=null;
			return -1;
		}
		else {
			if(table.getPassword().equals(password)) {
				System.out.println("��ѯ����ɹ�");
				session.close();
				return 1;
			}
			else {
				System.out.println("�˺��������");
				session.close();
				table=null;
				return 0;
			}
		}
	}
	/**
	 * ע����֤
	 * @param name �˺�
	 * @param Password ����
	 * @return token�����ӣ�ע��ʧ�ܣ��˺Ŵ��ڷŻ�null����Ȼ�Ż�token
	 */
	public boolean isRegister(String name,String Password) {
		Login table=new Login();
		Session session=HibernateSessionFactory.getSession();
		Transaction tran=session.beginTransaction();
		session.clear();
		if((table=(Login)session.get(Login.class, name))!=null) {
			System.out.println("�˺��Դ���");
			session.close();
			table=null;
			return false;
		}
		else {
			//String token=UUID.randomUUID().toString();
			int picture=(int) (1+Math.random()*6);//"http://172.22.70.227:8080/Images/";//man.png"
			Userinfo info=new Userinfo();
			Login login=new Login();
			login.setAccount(name);    //�˺�
			login.setPassword(Password);   //����
			login.setValidation(null);   //������
			info.setAccount(name);  //�˺�
			info.setNickname("һ��С����");  //�ǳ�
			info.setLevels(1);  //�ȼ�
			info.setNavheader("http://192.168.137.1:8080/Images/"+picture);  //ͷ��
			
			session.save(login);
			session.save(info);
			tran.commit();
			session.close();
			return true;
		}
	}
	/**
	 * ��Ϊtoken�����������Զ��嵥������
	 * @return �Żظ���token�Ľ��
	 */
	public String setToken(String name) {
		Login login=new Login();
		String token=UUID.randomUUID().toString();
		Session session=HibernateSessionFactory.getSession();
		Transaction tran=session.beginTransaction();
		login=(Login)session.get(Login.class, name);
		login.setValidation(token);
		session.update(login);
		tran.commit();
		session.clear();
		session.close();;
		login=null;
		return token;
	}
	/*
	 * �жϳ������Ƿ�ʧЧ
	 */
	public boolean isToken(String name,String token) {
		Login login=new Login();
		//SQLQuery sqlQuery = economicContractDao.getSession().createSQLQuery(sql.toString()).addEntity(EconomicContractEntity.class);
//		sqlQuery.setCacheable(false);
		try {
			Session session=HibernateSessionFactory.getSession();
			session.clear();
			Transaction tran=session.beginTransaction();
			Query query=session.createQuery("from Login where account='"+name+"'");
			query.setCacheable(false);
			List list=query.list();
			tran.commit();
			session.close();
			login=(Login) list.get(0);
			System.out.println("��ȡ���˺�;"+login.getAccount()+"��ȡ�ĳ�����;"+login.getValidation());
			System.out.println("app���˺�"+name+"app�ĳ����ӣ�"+token);
		}
		catch(Exception e){
			System.out.println(e);
		}
		if(login.getValidation().equals(token)) {
			System.out.println("������ƥ��ɹ�,��ʾ�ڵ���״̬�����³�����");
			login=null;
			return true;
		}
		else {
			System.out.println("������ʧ�ܣ���ʾ�Ѿ�ʧЧ��");
			login=null;
			return false;
		}
//		System.out.println("�˺ţ�"+login.getAccount()+"������"+login.getValidation());
//		System.out.println(login.getValidation().equals(token));
//		Iterator iterator=list.iterator();
//		if(iterator.hasNext()) {
//			Login login=(Login) iterator.next();
//			System.out.println("������"+name+"�˺ţ�"+token);
//			System.out.println("�˺ţ�"+login.getAccount()+"������"+login.getValidation());
//			System.out.println(login.getValidation().equals(token));
//			return true;
//		}
//		else {
//			return false;
//		}
//		Login login=(Login)session.get(Login.class, name);
//		session.close();
//		System.out.println("������"+name+"�˺ţ�"+token);
//		System.out.println("�˺ţ�"+login.getAccount()+"������"+login.getValidation());
//		System.out.println(login.getValidation().equals(token));
//		if(login.getValidation().equals(token)) {
//			/**
//			 * û��ʧЧ
//			 */
//			System.out.println("ƥ��ɹ�");
//			return true;
//		}
//		else
//			return false;
	}
}
