
<?php

show_source(__FILE__);

$Step1=False;
$Step2=False;

$info=(array)json_decode(@$_GET['Information']);

if(is_array($info)){

    var_dump($info);

    is_numeric(@$info["year"])?die("Sorry~"):NULL;
    if(@$info["year"]){
        ($info["year"]=2022)?$Step1=True:NULL;
    }
    if(is_array(@$info["items"])){
        if(!is_array($info["items"][1])OR count($info["items"])!==3 ) die("Sorry~");
        $status = array_search("skiing", $info["items"]);
        $status===false?die("Sorry~"):NULL;
        foreach($info["items"] as $key=>$val){
            $val==="skiing"?die("Sorry~"):NULL;
        }
        $Step2=True;
    }
}

if($Step1 && $Step2){
    include "2022flag.php";echo $flag;
}
?>