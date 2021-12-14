var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PhotoBook = /** @class */ (function () {
    function PhotoBook() {
        this.numPages = 16;
    }
    PhotoBook.prototype.GetNumberPages = function () {
        return this.numPages;
    };
    PhotoBook.prototype.setNumPages = function (_numpages) {
        this.numPages = _numpages;
    };
    return PhotoBook;
}());
var BigPhotoBook = /** @class */ (function (_super) {
    __extends(BigPhotoBook, _super);
    function BigPhotoBook(_numpages) {
        var _this = _super.call(this) || this;
        _this.numPages = _numpages;
        return _this;
    }
    return BigPhotoBook;
}(PhotoBook));
var photobook = new PhotoBook();
console.log(photobook.GetNumberPages());
var photobook2 = new PhotoBook();
photobook2.setNumPages(24);
console.log(photobook2.GetNumberPages());
var bigPhotoBook = new BigPhotoBook(64);
console.log(bigPhotoBook.GetNumberPages());
