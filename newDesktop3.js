var flag = 0;   //to indicate whether firstly "more" is clicked, so as to run the "else code" of 'click event'.  1 : clicked;  0: not clicked;  to avoid the running of "else code" when clicked first on outside.

document.addEventListener('click', function (e) {
    let elem = document.getElementById("more");
    // let elem2= document.getElementById("id_bottom_bar");
    // let elem31= document.getElementById("ob1");
    // let elem32= document.getElementById("ob2");
    // let elem33= document.getElementById("ob3");
    // let elem34= document.getElementById("ob4");
    // let elem4= document.getElementById("bottom_bar_section");
    let elem5 = document.getElementById("more_menu_container_id");

    let elem6 = document.getElementsByClassName("copydiv_ob");
    let elem61 = document.getElementById("copydiv_ob1");
    let elem62 = document.getElementById("copydiv_ob2");
    let elem63 = document.getElementById("copydiv_ob3");
    let elem64 = document.getElementById("copydiv_ob4");
    let elem65 = document.getElementById("copydiv_ob5");
    let elem66 = document.getElementById("copydiv_ob6");
    let elem67 = document.getElementById("copydiv_ob7");
    let elem68 = document.getElementById("copydiv_ob8");
    let elem69 = document.getElementById("copydiv_ob9");
    let elem71 = document.getElementById("copydiv_add");
    let elem72 = document.getElementById("copydiv_sub");
    let copyelem = document.getElementById("copy_div");


    if (elem.contains(e.target)) {
        flag = 1;
        elem5.style.height = "100vh";
        let rect = elem.getBoundingClientRect();
        copyelem.style.width = rect.width + "px";
        copyelem.style.height = rect.height + "px";
        copyelem.style.left = rect.left + "px";
        copyelem.style.right = rect.right + "px";
        copyelem.style.top = rect.top + "px";
        copyelem.style.bottom = rect.bottom + "px";

        copyelem.style.animation = "opening_copydiv 2s forwards";

        elem61.style.animation = "keyframe_open_moreob 2s forwards";
        elem62.style.animation = "keyframe_open_moreob 2s forwards";
        elem63.style.animation = "keyframe_open_moreob 2s forwards";
        elem64.style.animation = "keyframe_open_moreob 2s forwards";
        elem65.style.animation = "keyframe_open_moreob 2s forwards";
        elem66.style.animation = "keyframe_open_moreob 2s forwards";
        elem67.style.animation = "keyframe_open_moreob 2s forwards";
        elem68.style.animation = "keyframe_open_moreob 2s forwards";
        elem69.style.animation = "keyframe_open_moreob 2s forwards";
        elem71.style.animation = "keyframe_open_add 2s forwards";
        elem72.style.animation = "keyframe_open_add 2s forwards";

    }
    else if(!elem61.contains(e.target) && !elem62.contains(e.target) && !elem63.contains(e.target) && !elem64.contains(e.target) && !elem65.contains(e.target) && !elem66.contains(e.target) && !elem67.contains(e.target) && !elem68.contains(e.target) && !elem69.contains(e.target) && !elem71.contains(e.target) && !elem72.contains(e.target)){
        
        if (flag == 1) {
            elem5.style.height = "0vh";

            elem61.style.animation = "keyframe_close_moreob 2s forwards";
            elem62.style.animation = "keyframe_close_moreob 2s forwards";
            elem63.style.animation = "keyframe_close_moreob 2s forwards";
            elem64.style.animation = "keyframe_close_moreob 2s forwards";
            elem65.style.animation = "keyframe_close_moreob 2s forwards";
            elem66.style.animation = "keyframe_close_moreob 2s forwards";
            elem67.style.animation = "keyframe_close_moreob 2s forwards";
            elem68.style.animation = "keyframe_close_moreob 2s forwards";
            elem69.style.animation = "keyframe_close_moreob 2s forwards";
            elem71.style.animation = "keyframe_close_add 2s forwards";
            elem72.style.animation = "keyframe_close_add 2s forwards";

            copyelem.style.animation = "closing_copydiv 1.5s forwards";
            copyelem.style.width = rect.width + "px";
            copyelem.style.height = rect.height + "px";
            copyelem.style.left = rect.left + "px";
            copyelem.style.right = rect.right + "px";
            copyelem.style.top = rect.top + "px";
            copyelem.style.bottom = rect.bottom + "px";
        }
    }
});

var count_moreob = 0;

function add_moreob(){
    if(count_moreob != 9){
        count_moreob++;
        let t1 = "copydiv_ob";
        let t2 = count_moreob.toString();
        let res_elem_id = t1.concat(t2);

        document.getElementById(res_elem_id).style.display = "block";

        if(count_moreob < 5){
            t1 = "moreob";
            t2 = count_moreob.toString();
            res_elem_id = t1.concat(t2);
            document.getElementById(res_elem_id).style.display = "block";
        }

        if(count_moreob > 4){
            document.getElementById("more").style.boxShadow = "6px 6px rgba(255, 255, 255, 0.301), 3px 3px rgba(255, 255, 255, 0.311)";
        }
        else{
            document.getElementById("more").style.boxShadow = "none";
        }

    }
}
function sub_moreob(){
    if(count_moreob != 0){
        let t1 = "copydiv_ob";
        let t2 = count_moreob.toString();
        let res_elem_id = t1.concat(t2);

        document.getElementById(res_elem_id).style.display = "none";

        if(count_moreob < 5){
            t1 = "moreob";
            t2 = count_moreob.toString();
            res_elem_id = t1.concat(t2);
            document.getElementById(res_elem_id).style.display = "none";
        }
        count_moreob--;

        if(count_moreob > 4){
            document.getElementById("more").style.boxShadow = "6px 6px rgba(255, 255, 255, 0.301),3px 3px rgba(255, 255, 255, 0.311)";
        }
        else{
            document.getElementById("more").style.boxShadow = "none";
        }

    }
}

