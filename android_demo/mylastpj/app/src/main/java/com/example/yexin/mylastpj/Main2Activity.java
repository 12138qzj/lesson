package com.example.yexin.mylastpj;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Toast;

public class Main2Activity extends Activity {
    private ImageView iv_searchans_back;
    private LinearLayout relative_local;
    //private fragmentone_stadiums_adapter mAdapter = null;
    private ListView fragmentone_select_listview;

    @Override
    protected void onCreate(Bundle savedInstanceState)  {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        iv_searchans_back=(ImageView)findViewById(R.id.iv_searchans_back);
        relative_local=(LinearLayout)findViewById(R.id.relative_local);
        iv_searchans_back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Toast.makeText(v,"1",Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(Main2Activity.this,MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
        relative_local.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Main2Activity.this,MainActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }

}
