package org.getdata.datapackage;
/*
������δʹ��....
*/
import org.table.Gymnasium;

import net.sf.json.JSONObject;

public class GymnasiumPackage {
	public static JSONObject GymnasiumPackage(Gymnasium gymnasium) {
		
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
		return jsonObj;
	}
}
