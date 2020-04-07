package com.example.a23646.focus;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ExpandableListView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by 23646 on 2019/10/31.
 */

public class TabFragment_focus extends Fragment{
    private List<Focus_Item> mData;
    private Context mContext;
    private ListView lv_focus_recommend;
    private ExpandableListView expandableListView;

    public String[] groupString = {"特别关注","默认"};
    public String[][] childString = {
            {"尚硅谷"},
            {"尚硅谷","非我执笔","王尼玛"}

    };

    //private List<Order> mData = null;
    public static Fragment newInstance() {
        TabFragment_focus fragment = new TabFragment_focus();
        return fragment;
    }

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_focus, container, false);
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity());
        layoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        lv_focus_recommend = (ListView)rootView.findViewById(R.id.lv_focus_recommend);
        mData = new LinkedList<Focus_Item>();
        mContext = getContext();
        expandableListView = (ExpandableListView)rootView.findViewById(R.id.expend_list);
        initial_Data();
        Utility.setListViewHeightBasedOnChildren(expandableListView);
        Utility.setListViewHeightBasedOnChildren(lv_focus_recommend);
        return rootView;
    }

    public void initial_Data(){
        initial_Focus_Data();
        initial_Recommend_Data();
    }

    //加载关注人员数据
    public void initial_Focus_Data(){

        expandableListView.setAdapter(new MyExtendableListViewAdapter());
        //设置分组的监听
        expandableListView.setOnGroupClickListener(new ExpandableListView.OnGroupClickListener() {
            @Override
            public boolean onGroupClick(ExpandableListView parent, View v, int groupPosition, long id) {

                Toast.makeText(mContext, groupString[groupPosition], Toast.LENGTH_SHORT).show();
                return false;
            }
        });
        //设置子项布局监听
        expandableListView.setOnChildClickListener(new ExpandableListView.OnChildClickListener() {
            @Override
            public boolean onChildClick(ExpandableListView parent, View v, int groupPosition, int childPosition, long id) {
                Toast.makeText(mContext, childString[groupPosition][childPosition], Toast.LENGTH_SHORT).show();
                return true;

            }
        });
        //控制他只能打开一个组
        expandableListView.setOnGroupExpandListener(new ExpandableListView.OnGroupExpandListener() {
            @Override
            public void onGroupExpand(int groupPosition) {
                int count = new MyExtendableListViewAdapter().getGroupCount();
                for(int i = 0;i < count;i++){
                    if (i!=groupPosition){
                        expandableListView.collapseGroup(i);
                    }
                }
                /**
                 * 计算group下的子项的高度
                 */
                Utility.setExpandedListViewHeightBasedOnChildren(expandableListView,
                        groupPosition);
                // 更新group每一项的高度
                Utility.setListViewHeightBasedOnChildren(
                        expandableListView);
            }
        });
        expandableListView.setOnGroupCollapseListener(new ExpandableListView.OnGroupCollapseListener() {

            @Override
            public void onGroupCollapse(int groupPosition) {
                Log.e("collapse", "收缩");

                /*
                 * 计算group下的每一个子项的高度，然后收缩
                 */
                Utility.setCollapseListViewHeightBasedOnChildren(expandableListView,
                        groupPosition);
                /*
                 * 重新评估group的高度
                 */
                Utility.setListViewHeightBasedOnChildren(expandableListView);
                /*
                 * ListUtil.setCollapseListViewHeightBasedOnChildren(listView,
                 * groupPosition);
                 */
            }

        });
    }

    //加载推荐人员数据
    public void initial_Recommend_Data(){

        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        mData.add(new Focus_Item(R.drawable.focus_down,"54644846","篮球","南昌"));
        lv_focus_recommend.setAdapter(new Focus_Item_Adapter((LinkedList<Focus_Item>) mData,mContext));
    }

    public void initial_listener(){

    }
}
