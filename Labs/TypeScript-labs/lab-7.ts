class PhotoBook {
    numPages:number;
    constructor(){
        this.numPages=16;
    }

    GetNumberPages():number{
        return this.numPages;
    }
    setNumPages(_numpages:number){
            this.numPages=_numpages;
    }
}
class BigPhotoBook extends PhotoBook{
    constructor(_numpages:number) {
        super();
        this.numPages=_numpages;
    }
}
var photobook=new PhotoBook();
console.log(photobook.GetNumberPages());
var photobook2=new PhotoBook();
photobook2.setNumPages(24);
console.log(photobook2.GetNumberPages());
var bigPhotoBook=new BigPhotoBook(64);
console.log(bigPhotoBook.GetNumberPages());