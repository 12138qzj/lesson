package com.example.a23646.focus;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import java.util.LinkedList;
import java.util.List;

import static com.example.a23646.focus.R.id.lv_focus_recommend;

/**
 * Created by 23646 on 2019/11/5.
 */

public class TabFragment_fans extends Fragment{
    private List<Focus_Item> mData;
    private Context mContext;
    private Focus_Item_Adapter focus_item_adapter = null;
    private ListView lv_focus_fans;

    public static Fragment newInstance() {
        TabFragment_fans fragment = new TabFragment_fans();
        return fragment;
    }

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_fans, container, false);
        LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity());
        layoutManager.setOrientation(LinearLayoutManager.VERTICAL);
        lv_focus_fans = (ListView)rootView.findViewById(R.id.lv_focus_fans);
        mData = new LinkedList<Focus_Item>();
        mContext = getContext();
        initial_Data();
        focus_item_adapter = new Focus_Item_Adapter((LinkedList<Focus_Item>) mData, mContext);
        lv_focus_fans.setAdapter(focus_item_adapter);
        Utility.setListViewHeightBasedOnChildren(lv_focus_fans);
        return rootView;
    }

    public void initial_Data(){
        initial_Recommend_Data();
    }

    //加载推荐数据
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
    }

}
