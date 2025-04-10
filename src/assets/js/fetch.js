// export function fetchPost(url, json, callback) {
//     fetch(url , { method : 'post'
// 					, headers : {'Content-Type' : 'application/json'}
// 					, body : JSON.stringify(json)
// 				})
//     .then(res => res.json())
//     .then(map => callback(map));
// }
//
// export function fetchGet(url, callback) {
//     callback({
//         'result' : 'OK',
//         'data' : {
//             'totalElements' : 30,
//             'totalPages' : 9,
//             'pageNumber' : 3,
//             'word' : '테스트임~',
//             'status' : '어쩌구',
//             'content' : [
//                 {
//                     'artistId' : 1,
//                     'image' : 'null',
//                     'name' : '김승우',
//                     'status' : '어쩌구',
//                 },
//                 {
//                     'artistId' : 2,
//                     'image' : 'null',
//                     'name' : '김승우',
//                     'status' : '어쩌구',
//                 },
//                 {
//                     'artistId' : 3,
//                     'image' : 'null',
//                     'name' : '김승우',
//                     'status' : '어쩌구',
//                 },
//             ]
//         }
//     });
//     // fetch(url)
//     // .then(res => res.json())
//     // .then(map => callback(map));
// }