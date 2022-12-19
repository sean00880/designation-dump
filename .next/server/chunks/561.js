"use strict";
exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 7561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PhotoGallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-photo-gallery"
var external_react_photo_gallery_ = __webpack_require__(6232);
var external_react_photo_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_photo_gallery_);
// EXTERNAL MODULE: external "react-images"
var external_react_images_ = __webpack_require__(890);
var external_react_images_default = /*#__PURE__*/__webpack_require__.n(external_react_images_);
;// CONCATENATED MODULE: ./components/Gallery/photos.js
const photos = [
    {
        src: "img/gallery/1.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/2.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/3.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/4.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/5.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/6.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/7.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/8.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/9.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/10.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/11.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/12.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/13.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/14.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/15.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/16.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/17.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/18.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/19.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/20.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/21.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/22.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/23.jpg",
        width: 4,
        height: 3
    },
    {
        src: "img/gallery/24.jpg",
        width: 4,
        height: 3
    }, 
];

;// CONCATENATED MODULE: ./components/Gallery/PhotoGallery.js





function PhotoGallery() {
    const { 0: currentImage , 1: setCurrentImage  } = (0,external_react_.useState)(0);
    const { 0: viewerIsOpen , 1: setViewerIsOpen  } = (0,external_react_.useState)(false);
    const openLightbox = (0,external_react_.useCallback)((event, { photo , index  })=>{
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = ()=>{
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_photo_gallery_default()), {
                photos: photos,
                onClick: openLightbox
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_images_.ModalGateway, {
                children: viewerIsOpen ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_images_.Modal, {
                    onClose: closeLightbox,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_images_default()), {
                        currentIndex: currentImage,
                        views: photos.map((x)=>({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))
                    })
                }) : null
            })
        ]
    });
}


/***/ })

};
;