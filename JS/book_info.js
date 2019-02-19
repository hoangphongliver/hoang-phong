function getParam(key,value_Default =''){
    var url_string = location.href;
    var url = new URL(url_string);
    var value =  url.searchParams.get(key);
    return value ? value : value_Default;
}


        var id = getParam("id");
        var http = new XMLHttpRequest();
        http.open('GET','https://api.myjson.com/bins/mfrlm',true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState==4){
                RenderUser(JSON.parse(this.responseText));
            }
        }
    
                function RenderUser(books){
                    var html ='';
                    for(let book of books){
                       if(id==book.id){
                        html += '<h3>' + book.name + '</h3>';
                        html += '<p> Tác giả: ';
                            html += '<a href=#>' + book.tacgia + '</a>';
                        html += '</p>';
                        html += '<p> Nhà xuất bản: NXB văn hóa - Văn nghệ';
                        html += '</p>';
                        html += '<p> Người dịch: Nguyễn Hiền Thu' + '</p>';
                        html += '<p id="p1">Nhà phát hành:';
                            html += '<a href="#">Phan Thị' + '</a>';
                        html += '</p>';
                        html += '<p id="p0">' + book.noidung + '</p>';
                        html += '</p>';
                        html += '<a id="a0" href="#p3">Xem Thêm' + '</a>';
                       }
                       document.getElementById('thongtinchitiet').innerHTML = html;
                    }
                
                    var html1= '';
                    for(let book of books){
                        if(id==book.id){
                            html1 += '<img src='+ book.image +'>';
                        }
                        document.getElementById("img").innerHTML =html1;
                    }
                    var html2 = '';
                    for(let book of books){
                        if(id==book.id){
                            html2 += '<p> Thông Tin Thanh Toán' + '</p>';
                            
                            html2 += '<p> Giá bìa';
                                html2 += '<span id="sp1">' + book.giagoc + 'đ' + '</span>';
                            html2 += '</p>';

                            html2 += '<p>Giá bán:'; 
                                html2 += '<span id="sp2">' + book.giagiam + 'đ' +'</span>';
                            html2 += '</p>';

                            html2 += '<p>Tiết kiệm: ';
                                html2 +=  '<span id="sp3">30.000đ (-20%)' + '</span>';
                            html2 += '</p>';
    
                            html2 += '<p id="p2">';
                                html2 += '<i class="far fa-check-circle">' + '</i>';
                            html2 += 'CÓ HÀNG</p>';
    
                            html2 += '<a href="#">';
                                html2 += '<i class="fas fa-cart-plus">' + '</i>';
                            html2 += 'MUA NGAY</a>';
                        }
                        document.getElementById("thanhtoan").innerHTML =html2;
                    }
        }