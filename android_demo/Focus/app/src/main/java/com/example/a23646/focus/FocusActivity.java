package com.example.a23646.focus;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Canvas;
import android.os.Bundle;
import android.support.design.widget.TabLayout;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.PagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import java.lang.reflect.Field;

public class FocusActivity extends AppCompatActivity {
    private TabLayout tabLayout = null;
    private ViewPager viewPager;
    private android.support.v4.app.Fragment[] mFragmentArrays = new android.support.v4.app.Fragment[2];
    private String[] mTabTitles = new String[2];

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_focus);
        tabLayout = (TabLayout) findViewById(R.id.tablayout);
        viewPager = (ViewPager) findViewById(R.id.tab_viewpager);
        initView();
    }

    private void initView() {
        mTabTitles[0] = "我的关注";
        mTabTitles[1] = "我的粉丝";
        //setIndicator(tabLayout,10,10);

        tabLayout.setTabMode(TabLayout.MODE_FIXED);
        //设置tablayout距离上下左右的距离
        //tab_title.setPadding(20,20,20,20);
        mFragmentArrays[0] = TabFragment_focus.newInstance();
        mFragmentArrays[1] = TabFragment_fans.newInstance();
        PagerAdapter pagerAdapter = new MyViewPagerAdapter(getSupportFragmentManager(),mFragmentArrays,mTabTitles);
        viewPager.setAdapter(pagerAdapter);
        //将ViewPager和TabLayout绑定
        tabLayout.setupWithViewPager(viewPager);
    }
    final class MyViewPagerAdapter extends FragmentPagerAdapter {
        private android.support.v4.app.Fragment[] mFragmentArrays;
        private String[] mTabTitles;
        public MyViewPagerAdapter(FragmentManager fm, android.support.v4.app.Fragment[] mFragmentArrays, String[] mTabTitles) {
            super(fm);
            this.mFragmentArrays=mFragmentArrays;
            this.mTabTitles=mTabTitles;
        }

        @Override
        public android.support.v4.app.Fragment getItem(int position) {
            return mFragmentArrays[position];
        }

   /* @Override
    public Object instantiateItem(ViewGroup container, int position) {
        return super.instantiateItem(container, position);
    }*/

        @Override
        public int getCount() {
            return mFragmentArrays.length;
        }

        @Override
        public void destroyItem (ViewGroup container, int position, Object object) {
            super.destroyItem(container, position, object);
        }

        @Override
        public CharSequence getPageTitle(int position) {
            return mTabTitles[position];
        }
    }

}
