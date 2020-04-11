package DateBase;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.ov.HibernateSessionFactory;
import org.table.*;



public class DataBase_Altertable {
	//ɾ�����ݱ��е�����(����  ���ݱ�ţ����ţ��޸ĵ�ʱ���  �����ͣ�A,B,C..��)
	public static boolean AlterABC(String stadium_no, String place, String time, String table_type) {
		//201720180321 �� ���ţ�1�� ʱ��Σ�7..������A,B,C..
		
		switch(table_type) {
		case "A":
			try {
				
				Session session=HibernateSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
			//"update a set stuname = ?,stusex = ? where stuid = ? "
				String hql = "update a set a"+time+"='0' where avno= ? and acno= ? ";
				System.out.println("hql:"+hql);
				int i = session.createSQLQuery(hql)
					.setParameter(0, stadium_no)
					.setParameter(1, place)
					.executeUpdate();				
				System.out.println(i);
				
				//����ع�������
				try {
					tr.commit();
				} catch (Exception e) {
					tr.rollback();
					e.printStackTrace();
				}finally{
					session.close();
				}

			
							
			}catch(Exception e){
				System.out.println(e);
				return false;
			}
			break;
		case "B":
			try {
				
				Session session=HibernateSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
			//"update a set stuname = ?,stusex = ? where stuid = ? "
				String hql = "update b set b"+time+"='0' where bvno= ? and bcno= ? ";
				System.out.println("hql:"+hql);
				int i = session.createSQLQuery(hql)
					.setParameter(0, stadium_no)
					.setParameter(1, place)
					.executeUpdate();				
				System.out.println(i);
				
				//����ع�������
				try {
					tr.commit();
				} catch (Exception e) {
					tr.rollback();
					e.printStackTrace();
				}finally{
					session.close();
				}

			
							
			}catch(Exception e){
				System.out.println(e);
				return false;
			}
			break;
		case "C":
			try {
				
				Session session=HibernateSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
			//"update a set stuname = ?,stusex = ? where stuid = ? "
				String hql = "update c set c"+time+"='0' where cvno= ? and ccno= ? ";
				System.out.println("hql:"+hql);
				int i = session.createSQLQuery(hql)
					.setParameter(0, stadium_no)
					.setParameter(1, place)
					.executeUpdate();				
				System.out.println(i);
				
				//����ع�������
				try {
					tr.commit();
				} catch (Exception e) {
					tr.rollback();
					e.printStackTrace();
				}finally{
					session.close();
				}

			
							
			}catch(Exception e){
				System.out.println(e);
				return false;
			}
			break;
		case "D":
			try {
				
				Session session=HibernateSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
			//"update a set stuname = ?,stusex = ? where stuid = ? "
				String hql = "update d set d"+time+"='0' where dvno= ? and dcno= ? ";
				System.out.println("hql:"+hql);
				int i = session.createSQLQuery(hql)
					.setParameter(0, stadium_no)
					.setParameter(1, place)
					.executeUpdate();				
				System.out.println(i);
				
				//����ع�������
				try {
					tr.commit();
				} catch (Exception e) {
					tr.rollback();
					e.printStackTrace();
				}finally{
					session.close();
				}

			
							
			}catch(Exception e){
				System.out.println(e);
				return false;
			}
			break;
		default:
			return false;	
		}
				
		
	return true;
	}
	
	public  static Boolean DelectGorder(int id) {
		Session session=HibernateSessionFactory.getSession();		
		System.out.println("����DataBase���޸�(ɾ��)gorder");		
		session.clear();
		Transaction tran=session.beginTransaction();
		Gorder gorder=new Gorder();
		
		try {
			String hql = "Delete FROM gorder Where Oid=? ";
			System.out.println("hql:"+hql);
			int i = session.createSQLQuery(hql)
				.setParameter(0, id)
				.executeUpdate();				
			System.out.println(i);
			
			tran.commit();
			session.close();	
		}catch(Exception e) {
			e.printStackTrace();
			return false;
			}
		System.out.println("����1ɾ��gorder�ɹ�");
		return true;

	}

}
