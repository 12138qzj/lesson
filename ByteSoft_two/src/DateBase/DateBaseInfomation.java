package DateBase;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.ov.HibernateSessionFactory;
import org.table.Login;
import org.table.Userinfo;

public class DateBaseInfomation {
	public DateBaseInfomation() {}
	/**
	 * 
	 * @param name ������˺���Ϣ
	 * @return 
	 * @return ����һ������󣬴�����Ϣ���������Ϣ
	 */
	public static Userinfo getMoreInfomation(String name) {
		Userinfo userinfo=null;
		Session session=HibernateSessionFactory.getSession();
		userinfo=(Userinfo)session.get(Userinfo.class, name);
		return userinfo;
	}
	public static boolean ModifyInfomation(String name,String mode,String context) {
		Userinfo userinfo=null;
		try {
			 if(mode.equals("1")) {
		        System.out.println("�޸�ͷ��");
		        Session session=HibernateSessionFactory.getSession();
				Transaction tran=session.beginTransaction();
				userinfo=(Userinfo)session.get(Userinfo.class, name);
		        userinfo.setNavheader(context);
		        session.update(userinfo);
				tran.commit();
				session.clear();
				session.close();
				userinfo=null;
				return true;
		       }
		       else if(mode.equals("2")) {
		        	System.out.println("�޸���ʵ����");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setReallyName(context);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        }
		        else if(mode.equals("3")) {
		        	System.out.println("�޸��ǳ�");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setNickname(context);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        }
		        else if(mode.equals("4")) {
		        	System.out.println("�޸��Ա�");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setSex(context);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        	
		        }else if(mode.equals("5")) {
		        	System.out.println("�޸ĵȼ�");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	int a=Integer.parseInt(context);
		        	userinfo.setLevels(a);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        	
		        }else if(mode.equals("6")) {
		        	System.out.println("�޸��ֻ�����");
		        	
		        }else if(mode.equals("7")) {
		        	System.out.println("�޸ĳ�������");
		        	Date date=null;
		        	DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	try{
		        		date = format1.parse(context);
		        		userinfo.setBirth(date);
		        	}catch(Exception e) {
		        		e.printStackTrace();
		        		userinfo=null;
		        		return false;
		        	}
		        	session.update(userinfo);
					tran.commit();
					session.clear();
					session.close();
					userinfo=null;
					return true;
		        }else if(mode.equals("8")) {
		        	System.out.println("�޸����п�");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setNetBanking(context);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        	
		        }else if(mode.equals("9")) {
		        	System.out.println("�޸ĵ���");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setRegion(context);
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        	
		        }else if(mode.equals("10")) {
		        	System.out.println("�޸�ǩ��");
		        	Session session=HibernateSessionFactory.getSession();
					Transaction tran=session.beginTransaction();
					userinfo=(Userinfo)session.get(Userinfo.class, name);
		        	userinfo.setSignature(context);	
		        	 session.update(userinfo);
						tran.commit();
						session.clear();
						session.close();
						userinfo=null;
						return true;
		        }
		}catch(Exception e) {
			return false;
		}
		finally {
			userinfo=null;
		}
		return false;
	}
}
