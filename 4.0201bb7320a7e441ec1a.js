(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RKBc:function(t,e,a){var i,o;void 0===(o="function"==typeof(i=function(){"use strict";function e(t,e,a){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){c(i.response,e,a)},i.onerror=function(){console.error("could not download file")},i.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,n,c){var l=o.URL||o.webkitURL,b=document.createElement("a");b.download=n=n||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?i(b):a(b.href)?e(t,n,c):i(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){i(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,n){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),o);else if(a(t))e(t,o,n);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){i(c)})}}:function(t,a,i,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,i);var l="application/octet-stream"===t.type,b=/constructor/i.test(o.HTMLElement)||o.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||l&&b||n)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=d?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},s.readAsDataURL(t)}else{var r=o.URL||o.webkitURL,u=r.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){r.revokeObjectURL(u)},4e4)}});o.saveAs=c.saveAs=c,t.exports=c})?i.apply(e,[]):i)||(t.exports=o)},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return O});var i=a("ofXK"),o=a("fXoL"),n=a("H+bZ"),c=a("tyNb"),l=a("/t3+"),b=a("bTqV"),d=a("NFeN"),s=a("XhcP"),r=a("MutI"),u=a("FKr1");let p=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side"}ngOnInit(){this.chockLogin()}chockLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(n.a),o.Nb(c.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-admin"]],decls:30,vars:9,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side",1,"sidenav-left",3,"position","opened","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=o.Ub();o.Rb(0),o.Tb(1,"mat-toolbar",0),o.Tb(2,"button",1),o.ac("click",function(){return o.qc(t),o.oc(14).toggle()}),o.Tb(3,"mat-icon"),o.xc(4,"menu"),o.Sb(),o.Sb(),o.Tb(5,"span"),o.xc(6,"My Anggular"),o.Sb(),o.Ob(7,"div",2),o.Tb(8,"small"),o.xc(9,"Admin"),o.Sb(),o.Tb(10,"button",3),o.ac("click",function(){return e.logout()}),o.xc(11,"logout"),o.Sb(),o.Sb(),o.Tb(12,"mat-sidenav-container",4),o.Tb(13,"mat-sidenav",5,6),o.Tb(15,"mat-nav-list"),o.Tb(16,"mat-list-item",7),o.Tb(17,"mat-icon",8),o.xc(18,"dashboard"),o.Sb(),o.Tb(19,"h3",9),o.xc(20,"Dashboard"),o.Sb(),o.Sb(),o.Tb(21,"mat-list-item",10),o.Tb(22,"mat-icon",8),o.xc(23,"camera_enhance"),o.Sb(),o.Tb(24,"h3",9),o.xc(25,"Product"),o.Sb(),o.Sb(),o.Sb(),o.Sb(),o.Ob(26,"mat-sidenav",11,6),o.Tb(28,"mat-sidenav-content",12),o.Ob(29,"router-outlet"),o.Sb(),o.Sb(),o.Qb()}2&t&&(o.Cb(13),o.jc("position","start")("opened",!1)("fixedInViewport",!0)("fixedTopGap",65)("fixedBottomGap",0),o.Cb(13),o.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[l.a,b.a,d.a,s.b,s.a,r.d,r.b,c.b,r.a,u.j,s.c,c.d],styles:[""]}),t})();var h=a("o8Ft"),f=a("w55g"),g=a("RKBc"),m=a("0IaG");let T=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("books/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(n.a),o.Nb(m.g),o.Nb(m.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-action","","align","right"],["mat-button","","mat-dialog-close","",2,"margin-right","5px"],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=o.Ub();o.Tb(0,"h1",0),o.xc(1,"Unggah File"),o.Sb(),o.Tb(2,"div",1),o.Tb(3,"div",2),o.ac("click",function(){return o.qc(t),o.oc(7).click()}),o.Tb(4,"span"),o.xc(5),o.Sb(),o.Sb(),o.Tb(6,"input",3,4),o.ac("change",function(t){return e.onFileChange(t)}),o.Sb(),o.Sb(),o.Tb(8,"div",5),o.Tb(9,"button",6),o.xc(10,"Cancel"),o.Sb(),o.Tb(11,"button",7),o.ac("click",function(){return e.uploadFile()}),o.xc(12),o.Sb(),o.Sb()}2&t&&(o.Cb(5),o.yc(e.selectedFile?e.selectedFile.name:"Pilih File"),o.Cb(6),o.jc("disabled",e.loadingUpload),o.Cb(1),o.yc(e.loadingUpload?"uploading...":"Upload"))},directives:[m.h,m.e,b.a,m.d],styles:[""]}),t})();var S=a("kmnG"),x=a("qFsG"),k=a("3Pt+");let v=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("bookswithauth",this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("bookswithauth/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(m.g),o.Nb(m.a),o.Nb(n.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(o.Tb(0,"h3",0),o.xc(1," Detail Product "),o.Sb(),o.Tb(2,"div",1),o.Tb(3,"mat-form-field",2),o.Tb(4,"mat-label"),o.xc(5,"Judul"),o.Sb(),o.Tb(6,"input",3),o.ac("ngModelChange",function(t){return e.data.title=t}),o.Sb(),o.Sb(),o.Tb(7,"mat-form-field",2),o.Tb(8,"mat-label"),o.xc(9,"Penulis"),o.Sb(),o.Tb(10,"input",3),o.ac("ngModelChange",function(t){return e.data.author=t}),o.Sb(),o.Sb(),o.Tb(11,"mat-form-field",2),o.Tb(12,"mat-label"),o.xc(13,"Penerbit"),o.Sb(),o.Tb(14,"input",3),o.ac("ngModelChange",function(t){return e.data.publisher=t}),o.Sb(),o.Sb(),o.Tb(15,"mat-form-field",2),o.Tb(16,"mat-label"),o.xc(17,"Tahun terbit"),o.Sb(),o.Tb(18,"input",3),o.ac("ngModelChange",function(t){return e.data.year=t}),o.Sb(),o.Sb(),o.Tb(19,"mat-form-field",2),o.Tb(20,"mat-label"),o.xc(21,"ISBN"),o.Sb(),o.Tb(22,"input",3),o.ac("ngModelChange",function(t){return e.data.isbn=t}),o.Sb(),o.Sb(),o.Tb(23,"mat-form-field",2),o.Tb(24,"mat-label"),o.xc(25,"Harga"),o.Sb(),o.Tb(26,"input",4),o.ac("ngModelChange",function(t){return e.data.price=t}),o.Sb(),o.Sb(),o.Sb(),o.Tb(27,"div",5),o.Tb(28,"button",6),o.xc(29,"Batal"),o.Sb(),o.Tb(30,"button",7),o.ac("click",function(){return e.saveData()}),o.xc(31),o.Sb(),o.Sb()),2&t&&(o.Cb(6),o.jc("ngModel",e.data.title),o.Cb(4),o.jc("ngModel",e.data.author),o.Cb(4),o.jc("ngModel",e.data.publisher),o.Cb(4),o.jc("ngModel",e.data.year),o.Cb(4),o.jc("ngModel",e.data.isbn),o.Cb(4),o.jc("ngModel",e.data.price),o.Cb(4),o.jc("disabled",e.loading),o.Cb(1),o.yc(e.loading?"Menyimpan..":"Simpan"))},directives:[m.h,m.e,S.b,S.e,x.b,k.c,k.i,k.k,k.l,m.c,b.a,m.d],styles:[""]}),t})();var w=a("Xa2L"),y=a("Wp6s");function C(t,e){1&t&&(o.Tb(0,"div",2),o.Ob(1,"mat-spinner"),o.Sb())}function M(t,e){if(1&t){const t=o.Ub();o.Tb(0,"button",12),o.ac("click",function(){o.qc(t);const e=o.ec().$implicit;return o.ec(2).downloadFile(e)}),o.Tb(1,"mat-icon"),o.xc(2,"download"),o.Sb(),o.Sb()}}function j(t,e){if(1&t){const t=o.Ub();o.Tb(0,"tr"),o.Tb(1,"td"),o.wc(2,M,3,0,"button",9),o.Sb(),o.Tb(3,"td"),o.xc(4),o.Sb(),o.Tb(5,"td"),o.xc(6),o.Sb(),o.Tb(7,"td"),o.xc(8),o.Sb(),o.Tb(9,"td"),o.xc(10),o.Sb(),o.Tb(11,"td"),o.xc(12),o.Sb(),o.Tb(13,"td"),o.xc(14),o.Sb(),o.Tb(15,"td"),o.xc(16),o.Sb(),o.Tb(17,"td",7),o.Tb(18,"button",10),o.ac("click",function(){o.qc(t);const a=e.$implicit;return o.ec(2).uploadFile(a)}),o.xc(19,"Upload"),o.Sb(),o.Tb(20,"button",10),o.ac("click",function(){o.qc(t);const a=e.$implicit,i=e.index;return o.ec(2).ProductDetail(a,i)}),o.xc(21,"Edit"),o.Sb(),o.Tb(22,"button",11),o.ac("click",function(){o.qc(t);const a=e.$implicit,i=e.index;return o.ec(2).DeleteProduct(a.id,i)}),o.xc(23),o.Sb(),o.Sb(),o.Sb()}if(2&t){const t=e.$implicit,a=e.index,i=o.ec(2);o.Cb(2),o.jc("ngIf",""!=t.url),o.Cb(2),o.yc(a+1),o.Cb(2),o.yc(t.title),o.Cb(2),o.yc(t.author),o.Cb(2),o.yc(t.publisher),o.Cb(2),o.yc(t.year),o.Cb(2),o.yc(t.isbn),o.Cb(2),o.yc(t.price),o.Cb(6),o.jc("disabled",i.loadingDelete[a]),o.Cb(1),o.yc(i.loadingDelete[a]?"Menghapus..":"Delete")}}function F(t,e){if(1&t){const t=o.Ub();o.Tb(0,"mat-card"),o.Tb(1,"mat-card-header"),o.Tb(2,"mat-card-title"),o.xc(3),o.Sb(),o.Sb(),o.Tb(4,"mat-card-content"),o.Tb(5,"div",3),o.Ob(6,"span",4),o.Tb(7,"button",5),o.ac("click",function(){return o.qc(t),o.ec().ProductDetail({},-1)}),o.xc(8,"Tambah Product"),o.Sb(),o.Sb(),o.Tb(9,"table",6),o.Tb(10,"thead"),o.Ob(11,"th"),o.Tb(12,"th"),o.xc(13,"No"),o.Sb(),o.Tb(14,"th"),o.xc(15,"Judul"),o.Sb(),o.Tb(16,"th"),o.xc(17,"Penulis"),o.Sb(),o.Tb(18,"th"),o.xc(19,"Penerbit"),o.Sb(),o.Tb(20,"th"),o.xc(21,"Tahun Terbit"),o.Sb(),o.Tb(22,"th"),o.xc(23,"ISBN"),o.Sb(),o.Tb(24,"th"),o.xc(25,"Harga"),o.Sb(),o.Ob(26,"th",7),o.Sb(),o.Tb(27,"tbody"),o.wc(28,j,24,10,"tr",8),o.Sb(),o.Sb(),o.Sb(),o.Sb()}if(2&t){const t=o.ec();o.Cb(3),o.yc(t.title),o.Cb(25),o.jc("ngForOf",t.books)}}let D=(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loadingDelete={}}ngOnInit(){this.title="Produk",this.books={title:"Angular untuk Pemula",author:"Farid Suryanto",publisher:"Sunhouse Digital",year:2020,isbn:"8298377474",price:7e4},this.getBooks()}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1})}ProductDetail(t,e){this.dialog.open(v,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}DeleteProduct(t,e){confirm("Delete item?")&&(this.loadingDelete[e]=!0),this.api.delete("bookswithauth/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")})}uploadFile(t){this.dialog.open(T,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){g.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(o.Nb(m.b),o.Nb(n.a))},t.\u0275cmp=o.Hb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","accent",3,"disabled","click"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(o.wc(0,C,2,0,"div",0),o.wc(1,F,29,2,"mat-card",1)),2&t&&(o.jc("ngIf",e.loading),o.Cb(1),o.jc("ngIf",!e.loading))},directives:[i.k,w.b,y.a,y.c,y.e,y.b,b.a,i.j,d.a],styles:[""]}),t})();var I=a("tk/3");const L=[{path:"",component:p,children:[{path:"dashboard",component:h.a},{path:"product",component:D},{path:"",pathMatch:"full",redirectTo:"/admiin/dashboard"}]}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Lb({type:t}),t.\u0275inj=o.Kb({imports:[[i.c,c.c.forChild(L),f.a,k.e,I.b]]}),t})()}}]);