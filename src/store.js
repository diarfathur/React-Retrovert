import createStore from "unistore";
import axios from "axios";
import { playlistBerawan, playlistCerah, playlistHujan, Bearer } from "./Data.js"
import _ from 'lodash';


const initialState = {
    is_login: false,
    token: "",
    username: "",
    password: "",
    userStatus: "",
    email: "",
    contact: "",
    address: "",
    avatar: "",
    deskripsiPenjual: "",

    shopName: "",
    fullName: "",

    listRetro: [],

    itemDetail: "",
    namaProduk: "",
    stock: "",
    harga: "",
    kategori: "",
    foto_produk: "",
    deskripsi_produk: "",
    listMyItem: [],

    produk_id: "",
    orderQty: "",
    namaBarang: "",
    hargaSatuan: "",
    totalHarga: "",
    gambarProduk: "",
    listCart: [],
    sumCart: "",

    listTransaksi: [],

}

var baseUrl = 'http://localhost:8010/proxy'

export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },

    setCategory: (state, event) => {
        return { kategori: event.target.value };
    },

    postLogout: state => {
        return {
            is_login: false,
            token: ""
        };
    },

    // ########### LOGIN PENJUAL & PEMBELI ###########
    postLoginPembeli: async (state) => {
        const data = {
            username: state.username,
            password: state.password,
        };
        const reqToken = {
            method: 'post',
            url: baseUrl + '/login/pembeli',
            data: data,
            headers: { "Content-Type": "application/json" }
        }
        await axios(reqToken)
            .then(async (response) => {
                if (response.status == 200) {
                    store.setState({
                        is_login: true,
                        token: response.data.token,
                        userStatus: response.data.statusUser
                    });
                }
                const reqGet = {
                    method: 'get',
                    url: baseUrl + '/pembeli',
                    headers: { Authorization: "Bearer " + store.getState().token }
                }
                await axios(reqGet)
                    .then(function (response) {
                        if (response.status == 200) {
                            store.setState({
                                fullName: response.data.buyer.fullName,
                                contact: response.data.buyer.contact,
                                email: response.data.buyer.email,
                                address: response.data.buyer.address,
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    postLoginPenjual: async (state) => {
        const data = {
            username: state.username,
            password: state.password,
        };
        const reqToken = {
            method: 'post',
            url: baseUrl + '/login/penjual',
            data: data,
            headers: { "Content-Type": "application/json" }
        }
        await axios(reqToken)
            .then(async (response) => {
                if (response.status == 200) {
                    // console.log('INITOKEN', response.data.token)
                    store.setState({
                        is_login: true,
                        token: response.data.token,
                        userStatus: response.data.statusUser
                    });
                }
                const reqGet = {
                    method: 'get',
                    url: baseUrl + '/penjual',
                    headers: { Authorization: "Bearer " + store.getState().token }
                }
                await axios(reqGet)
                    .then(function (response) {
                        if (response.status == 200) {
                            store.setState({
                                shopName: response.data.seller.shopName,
                                contact: response.data.seller.contact,
                                email: response.data.seller.email,
                                address: response.data.seller.address,
                                avatar: response.data.seller.foto_profil,
                                deskripsiPenjual: response.data.seller.deskripsi_penjual
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    // ########### GET PRODUCT ###########
    GetPublic: async (state) => {
        await axios
            .get(baseUrl + '/public')
            .then(function (response) {
                store.setState({ listRetro: response.data.products })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getId: async (state, keyword) => {
        await axios
            .get(baseUrl + '/public/' + keyword)
            .then(function (response) {
                console.log("RSP", response.data)
                store.setState({ itemDetail: response.data.product })
                console.log("COK", response.data.product)
            })
    },

    // ########### REGISTER USER ###########
    postPenjualBaru: async state => {
        const data = {
            username: state.username,
            password: state.password,
            shopName: state.shopName,
            email: state.email,
            contact: state.contact,
            address: state.address,
        };
        await axios
            .post(baseUrl + '/penjual', data)
            .then(function (response) {
                if (response.status == 201) {
                    store.setState({
                        username: state.username,
                        shopName: state.shopName,
                        email: state.email,
                        contact: state.contact,
                        address: state.address,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    postPembeliBaru: async state => {
        const data = {
            username: state.username,
            password: state.password,
            fullName: state.fullName,
            email: state.email,
            contact: state.contact,
            address: state.address,
        };
        await axios
            .post(baseUrl + '/pembeli', data)
            .then(function (response) {
                if (response.status == 201) {
                    store.setState({
                        username: state.username,
                        fullName: state.fullName,
                        email: state.email,
                        contact: state.contact,
                        address: state.address,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // ########### End of Register USER ###########

    // ########### EDIT USER ###########
    editPembeli: async state => {
        const data = {
            username: state.username,
            password: state.password,
            fullName: state.fullName,
            email: state.email,
            contact: state.contact,
            address: state.address,
        };
        const putUser = {
            method: 'put',
            url: baseUrl + '/pembeli',
            data: data,
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(putUser)
            .then(function (response) {
                if (response.status == 202) {
                    store.setState({
                        username: response.data.updated_data.username,
                        fullName: response.data.updated_data.fullName,
                        email: response.data.updated_data.email,
                        contact: response.data.updated_data.contact,
                        address: response.data.updated_data.address,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    editPenjual: async state => {
        const data = {
            username: state.username,
            password: state.password,
            shopName: state.shopName,
            email: state.email,
            contact: state.contact,
            address: state.address,
            foto_profil: state.avatar,
            deskripsi_penjual: state.deskripsiPenjual,

        };
        const putUser = {
            method: 'put',
            url: baseUrl + '/penjual',
            data: data,
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(putUser)
            .then(function (response) {
                if (response.status == 202) {
                    console.log('Aduh', response.data.updated_data.deskripsi_penjual)
                    store.setState({
                        username: response.data.updated_data.username,
                        shopName: response.data.updated_data.shopName,
                        email: response.data.updated_data.email,
                        contact: response.data.updated_data.contact,
                        address: response.data.updated_data.address,
                        avatar: response.data.updated_data.foto_profil,
                        deskripsiPenjual: response.data.updated_data.deskripsi_penjual,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // ########### End of Edit USER ###########


    // ########### DELETE USER ###########
    deletePembeli: async state => {
        const deleteUser = {
            method: 'delete',
            url: baseUrl + '/pembeli',
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(deleteUser)
            .then(function (response) {
                if (response.status == 200) {
                    store.setState({
                        username: "",
                        fullName: "",
                        email: "",
                        contact: "",
                        address: "",
                    })
                    store.getState().postLogout()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    deletePenjual: async state => {
        const deleteUser = {
            method: 'delete',
            url: baseUrl + '/penjual',
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(deleteUser)
            .then(function (response) {
                if (response.status == 200) {
                    store.setState({
                        username: "",
                        shopName: "",
                        email: "",
                        contact: "",
                        address: "",
                        avatar: "",
                        deskripsiPenjual: "",
                    })
                    store.getState().postLogout()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // ########### End of Delete USER ###########

    // ########### ADD PRODCUT ###########
    postProduct: async state => {
        const data = {
            namaProduk: state.namaProduk,
            qty: parseInt(state.stock),
            harga: parseInt(state.harga),
            kategori: state.kategori,
            foto_produk: state.foto_produk,
            deskripsi_produk: state.deskripsi_produk,
        };
        const postItem = {
            method: 'post',
            url: baseUrl + '/penjual/produk',
            data: data,
            headers: { Authorization: "Bearer " + state.token },
        }
        await axios(postItem)
            .then(function (response) {
                if (response.status == 200) {
                    store.setState({
                        namaProduk: response.data.product.namaProduk,
                        qty: response.data.product.qty,
                        harga: response.data.product.harga,
                        kategori: response.data.product.kategori,
                        foto_produk: response.data.product.foto_produk,
                        deskripsi_produk: response.data.product.deskripsi_produk
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    // ########### GET Seller PRODUCT ###########
    getMyProduct: async state => {
        const getItem = {
            method: 'get',
            url: baseUrl + '/penjual/produk',
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(getItem)
            .then(function (response) {
                if (response.status == 200) {
                    store.setState({
                        listMyItem: response.data.products,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getMyProductId: async (state, keyword) => {
        const getItem = {
            method: 'get',
            url: baseUrl + '/penjual/produk/' + keyword,
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(getItem)
            .then(function (response) {
                store.setState({
                    itemDetail: response.data.productDetail,
                    idProduk: response.data.productDetail.id,
                    namaProduk: response.data.productDetail.namaProduk,
                    stock: response.data.productDetail.qty,
                    harga: response.data.productDetail.harga,
                    kategori: response.data.productDetail.kategori,
                    foto_produk: response.data.productDetail.foto_produk,
                    deskripsi_produk: response.data.productDetail.deskripsi_produk,
                })
                console.log("bangsat", store.getState().idProduk)
            })
        console.log("kokokoko", store.getState().itemDetail)
    },

    // ########### EDIT Seller PRODUCT ###########
    editMyProduct: async (state, id) => {
        const data = {
            namaProduk: state.namaProduk,
            qty: state.stock,
            harga: state.harga,
            kategori: state.kategori,
            foto_produk: state.foto_produk,
            deskripsi_produk: state.deskripsi_produk,
        };
        const editItem = {
            method: 'put',
            url: baseUrl + '/penjual/produk/' + id,
            headers: { Authorization: "Bearer " + store.getState().token },
            data: data,
        }
        await axios(editItem)
            .then(function (response) {
                console.log("ini response", response.data)
                if (response.status == 200) {
                    store.setState({
                        namaProduk: response.data.product.namaProduk,
                        stock: response.data.product.qty,
                        harga: response.data.product.harga,
                        kategori: response.data.product.kategori,
                        foto_produk: response.data.product.foto_produk,
                        deskripsi_produk: response.data.product.deskripsi_produk,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    // ########### DELETE Seller PRODUCT ###########
    deleteProduct: async (state, id) => {
        const delProd = {
            method: 'delete',
            url: baseUrl + '/penjual/produk/' + id,
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(delProd)
            .then(function (response) {

                if (response.status == 200) {
                    store.setState({
                        itemDetail: "",
                        idProduk: "",
                        namaProduk: "",
                        stock: "",
                        harga: "",
                        kategori: "",
                        foto_produk: "",
                        deskripsi_produk: "",
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },


    // ########### ADD CART ###########
    postCart: async (state) => {
        const data = {
            produk_id: state.itemDetail.id,
            qty: state.orderQty,
        };
        const postCart = {
            method: 'post',
            url: baseUrl + '/pembeli/cart',
            data: data,
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(postCart)
            .then(function (response) {
                if (response.status == 201) {
                    console.log("Post Cart", response.data.cart)
                    store.setState({
                        idProduk: response.data.cart.produk_id,
                        gambarProduk: response.data.cart.gambarProduk,
                        qty: response.data.cart.qty,
                        namaBarang: response.data.cart.namaProduk,
                        hargaSatuan: response.data.cart.hargaSatuan,
                        totalHarga: response.data.cart.totalHarga,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },


    getCart: async (state) => {
        const get = {
            method: 'get',
            url: baseUrl + '/pembeli/cart',
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(get)
            .then(function (response) {
                if (response.status == 200) {
                    console.log("Get Cart", response.data)
                    store.setState({
                        listCart: response.data.carts,
                        sumCart: response.data.totalPayment
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    // ########### DELETE Cart ###########
    deleteCart: async (state, id) => {
        const delCart = {
            method: 'delete',
            url: baseUrl + '/pembeli/cart/' + id,
            headers: { Authorization: "Bearer " + store.getState().token }
        }
        await axios(delCart)
            .catch(function (error) {
                console.log(error);
            });
    },

    // ########### ADD CART ###########
    postTransaksi: async (state) => {
        const postTrans = {
            method: 'post',
            url: baseUrl + '/pembeli/transaksi',
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(postTrans)
            .catch(function (error) {
                console.log(error);
            });
    },

    getAllTrans: async (state) => {
        const get = {
            method: 'get',
            url: baseUrl + '/pembeli/transaksi',
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(get)
            .then(function (response) {
                if (response.status == 200) {
                    store.setState({
                        listTransaksi: response.data.transactions,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getDetailTrans: async (state, id) => {
        const getDetail = {
            method: 'get',
            url: baseUrl + '/pembeli/transaksi/' + id,
            headers: { Authorization: "Bearer " + store.getState().token },
        }
        await axios(getDetail)
            .then(function (response) {
                store.setState({
                    listCart: response.data.cartList,
                    sumCart: response.data.transaction.totalPembayaran,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // searchNews: async (state, keyword) => {
    //     if (keyword.length > 2) {
    //         try {
    //             {
    //                 store.getState().listSong.map((item, key) => {
    //                     var counter = 0;
    //                     if (_.includes(item.track.name.toLowerCase(), keyword.toLowerCase())) {
    //                         store.getState().dataSearch.push(item)
    //                     }
    //                 })
    //             }

    //             store.setState({ listSong: store.getState().dataSearch });
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     if (keyword.length <= 2) {
    //         try {
    //             const response = await axios.get(
    //                 "https://api.spotify.com/v1/playlists/" + store.getState().Thrower,
    //                 {
    //                     headers: {
    //                         "Authorization": "Bearer " + Bearer,
    //                     }
    //                 })
    //             // console.log(store.getState().listSong);
    //             store.setState({ listSong: response.data.tracks.items });
    //             store.getState().dataSearch = []
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    // },
})
