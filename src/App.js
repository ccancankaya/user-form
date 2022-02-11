import "./App.css";
import { Formik, Form, Field } from 'formik';
import eifel from "./images/eifel.jpg";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.jpg";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.jpg";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.jpg";
import pic8 from "./images/pic8.jpg";
import pic9 from "./images/pic9.jpg";
import pic10 from "./images/pic10.jpg";
import pic11 from "./images/pic11.png";
import pic12 from "./images/pic12.jpg";
import pic13 from "./images/pic13.jpg";
import pic14 from "./images/pic14.jpg";
import pic15 from "./images/pic15.jpg";
import pic16 from "./images/pic16.jpg";
import pic17 from "./images/pic17.png";
import pic18 from "./images/pic18.jpg";
import pic19 from "./images/pic19.jpg";
import pic20 from "./images/pic20.jpg";

import { useState } from 'react'
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function App() {
  const [visible, setVisible] = useState(true);
  const [page2Visible, setPage2Visible] = useState(false);
  const [page3Visible, setPage3Visible] = useState(false);
  const [page4Visible, setPage4Visible] = useState(false);
  const [page5Visible, setPage5Visible] = useState(false);
  const [valuee, setValuee] = useState(false);


  const visibleToNext1 = () => {
    if(valuee==false){
      alertify.error('Lütfen metni onaylayınız!');
    }
    else{
      setVisible(!visible);
      setPage2Visible(!page2Visible)
    }

  }
  const visibleToNext2 = (value) => {
    if (value.companyName == '') {
      alertify.error('Firma ismi boş bırakılamaz!');
    }
    else {
      setPage2Visible(!page2Visible)
      setPage3Visible(!page3Visible)
    }
  }

  const visibleToNext3 = (value) => {
    if (value.outdoorChecked.length == 0 && value.indoorChecked.length != 0) {
      setPage3Visible(!page3Visible)
      setPage4Visible(!page4Visible)
    }
    else if(value.outdoorChecked.length != 0 && value.indoorChecked.length == 0){
      setPage3Visible(!page3Visible)
      setPage4Visible(!page4Visible)
    }
    else if(value.outdoorChecked.length == 0 && value.indoorChecked.length == 0){
      alertify.error('İç veya dış alanlardan birinden seçim yapmalısınız!');
    }
  }

  const visibleToNext4 = () => {
    setPage4Visible(!page4Visible)
    setPage5Visible(!page5Visible)
  }

  const visibleToBack1 = () => {
    setPage5Visible(!page5Visible)
    setPage4Visible(!page4Visible)
  }
  const visibleToBack2 = () => {
    setPage4Visible(!page4Visible)
    setPage3Visible(!page3Visible)
  }

  const visibleToBack3 = () => {
    setPage3Visible(!page3Visible)
    setPage2Visible(!page2Visible)
  }

  const refreshPage = () => {
    window.location.reload()
  }

  const visibleToBack4 = () => {
    setPage2Visible(!page2Visible)
    setVisible(!visible)
  }
  const validateCompanyName = (value) => {
    let error;
    if (!value) {
      error = 'Firma ismi boş bırakılamaz!';
    }
    return error;
  }

  const validateSecurityCheck = (value) => {
    let error;
    if (!value) {
      error = 'En az bir adet seçim yapmalısınız!';
    }
    return error;
  }




  return (

    <div className="container app">
      <div className="row page1">
        <div className="col-md-3 left">
          <img className="imgEifel" src={eifel} width="320" height="700" />
        </div>

        <div className="col-md-9 bg-dark right" style={{height: "700px"}}>
          <Formik
            initialValues={{
              companyName: '',
              firstAndLastName: '',
              email: '',
              phone: '',
              outdoorChecked: [],
              indoorChecked: [],
              freeText: '',
              tasarufChecked: [],
              freeText2: '',
              specialTasarufChecked: [],
              freeText3: '',
              freeText4: ''
            }}

            onSubmit={(values) => {
              // let query = "query {boards (ids: 2253272966) {owner{ id }  columns {   title   type   id }}}";

              // fetch ("https://api.monday.com/v2", {
              //   method: 'post',
              //   headers: {
              //     'Content-Type': 'application/json',
              //     'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxODg5NCwidWlkIjoxMDIzOTE4MCwiaWFkIjoiMjAyMi0wMi0wNlQxNDozMDo1NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDY0NzMwMSwicmduIjoidXNlMSJ9.akmSYIuTMhnSetB6Z7bO9kqk8o6zM0_s7RgtWHNvvdw'
              //   },
              //    body: JSON.stringify({
              //      'query': query
              //    })
              //   })
              //    .then(res => res.json())
              //    .then(res => console.log(JSON.stringify(res, null, 2)));



              alertify.alert('Mesaj', 'Gönderiliyor, Lütfen bekleyiniz!');
              let query3 = `mutation{ create_item (board_id:2253272966, item_name:\"${values.companyName} - Değer Analiz Raporu\") { id } }`;

              fetch("https://api.monday.com/v2", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxODg5NCwidWlkIjoxMDIzOTE4MCwiaWFkIjoiMjAyMi0wMi0wNlQxNDozMDo1NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDY0NzMwMSwicmduIjoidXNlMSJ9.akmSYIuTMhnSetB6Z7bO9kqk8o6zM0_s7RgtWHNvvdw'
                },
                body: JSON.stringify({
                  'query': query3
                })
              })
                .then(res => res.json())
                .then(res => {
                  fetch("https://api.monday.com/v2", {
                    method: 'post',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0NDUxODg5NCwidWlkIjoxMDIzOTE4MCwiaWFkIjoiMjAyMi0wMi0wNlQxNDozMDo1NS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDY0NzMwMSwicmduIjoidXNlMSJ9.akmSYIuTMhnSetB6Z7bO9kqk8o6zM0_s7RgtWHNvvdw'
                    },
                    body: JSON.stringify({
                      query: "mutation ($myBoardId:Int!, $myItemId:Int!, $myColumnValues:JSON!) { change_multiple_column_values(item_id:$myItemId, board_id:$myBoardId, column_values: $myColumnValues) { id }}",
                      variables: JSON.stringify({
                        myBoardId: 2253272966,
                        myItemId: 2267886158,
                        myItemId: Number(res.data.create_item.id),
                        myColumnValues: `{\"text\" : \"${values.companyName}\",\"b\" : \"${values.firstAndLastName}\",\"c\" : \"${values.email}\",\"metin\" : \"${values.phone}\",\"metin52\" : \"${window.location.href}\",\"kay_t_tarihi\" : \"${new Date().toLocaleString("tr-TR")}\",\"metin6\" : \"${values.outdoorChecked.toString()}\",\"metin2\" : \"${values.indoorChecked.toString()}\",\"metin9\" : \"${values.freeText}\",\"metin96\" : \"${values.tasarufChecked.toString()}\",\"metin26\" : \"${values.freeText2}\",\"metin5\" : \"${values.specialTasarufChecked.toString()}\",\"metin7\" : \"${values.freeText4}\"}`
                      })
                    })
                  })
                    .then(res => {
                      alertify.confirm('Kaydınız, başarı ile tamamlanmıştır. En kısa sürede Eyedius ekibi sizler ile iletişime geçerek kurulum sürecini başlatacaktır. Teşekkür ederiz.', function(){ window.location.reload(); });

                    })
                }
                );
            }}




          >
            {({ errors, touched, validateField, validateForm, values }) => (
              <Form>
                <div class={`card mt-3 mb-3 pagetext ${visible ? 'visible' : 'd-none'}`}>
                  <div class="card-header">
                    Eyedius - Değer Analiz Formu'na Hoş geldiniz!<br />
                    İş yeriniz için Güvenlik ve Tasarruf ihtiyaçlarınızı belirleyerek, size özel çözümlerimiz ile tanışın.
                  </div>
                  <div class="card-body">
                    <div className="scrollable">
                      <div className={`card-text`}>
                        Eyedius Teknoloji A.Ş. (“Eyedius”)  Aydınlatma Metni’ni okudum, anladım ve Kişisel Verilerimin 6698 sayılı Kişisel Verilerin Korunması Kanunu ve 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında Eyedius tarafından her türlü ürün ve hizmetlere ilişkin çeşitli bilgilendirme, tanıtım, reklam, promosyon, satış ve pazarlama amacıyla aşağıdaki kanallar yoluyla tarafıma ticari elektronik iletiler gönderilmesine ve amaçla yurtiçinde ve yurtdışında bulunan hizmet sağlayıcıları ile paylaşılmasına açık rıza veriyorum.
                        (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
                        İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,
                        Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme, haklarına sahiptir.
                        Yukarıda sayılan haklarınızı kullanmak üzere info@eyedius.com üzerinden bizimle iletişime geçebilirsiniz.
                        <div class="form-check mt-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={()=>setValuee(true)}/>
                          <label class="form-check-label" for="flexCheckDefault">
                            Eyedius Elektronik Ticari İleti onayı
                          </label>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" onClick={visibleToNext1}>Kabul et</button>
                  </div>
                </div>

                <div class={`card mt-3 mb-3 pagetext ${page2Visible ? 'visible' : 'd-none'}`}>
                  <div class="card-header">
                  Eyedius Değer Analiz Formu'na Hoş geldiniz.<br/>
                    3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <label for="companyName" class="form-label">Firma Adı <span style={{ color: "red" }}>*</span></label>
                      <Field type="text" name="companyName" validate={validateCompanyName} className="form-control" />
                      {errors.companyName && touched.companyName && <div>{errors.companyName}</div>}
                    </div>
                    <div class="mb-3">
                      <label for="firstAndLastName" class="form-label">İsim soyisim</label>
                      <Field type="text" name="firstAndLastName" className="form-control" />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">E-posta adresi</label>
                      <Field type="text" name="email" className="form-control" />
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label">Cep telefonu</label>
                      <Field type="text" name="phone" className="form-control" />
                    </div>
                  </div>
                  <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" onClick={visibleToBack4} style={{ marginRight: "5px" }}>Geri</button>
                    <button type="button" class="btn btn-primary" onClick={() => visibleToNext2(values)}>İleri</button>
                  </div>
                </div>

                <div class={`card mt-3 mb-3 pagetext ${page3Visible ? 'visible' : 'd-none'}`}>
                  <div class="card-header">
                  Eyedius Değer Analiz Formu'na Hoş geldiniz.<br/>
                    3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                  </div>
                  <div class="card-body">
                    <div className="scrollable">
                      <div role="group" aria-labelledby="checkbox-group">
                        <div class="card">
                          <div class="card-header">
                            Güvenlik Kontrolleri
                          </div>
                          <div class="card-body">

                            <p class="card-text mb-3" >   Dış Alanınızda Uygulamak İstediğiniz Bir Erken Uyarı Sistemi Var mı? <span style={{ color: "red" }}>*</span></p>
                            <div className="row">
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic1} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="Sınır duvarından tırmanırken ya da bariyer altından geçerken uyarı:Evet" />
                                  Sınır duvarından tırmanırken ya da bariyer altından geçerken uyarı
                                </label>
                              </div>
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic2} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="Bahçe alanına izinsiz girişte uyarı:Evet" />
                                  Bahçe alanına izinsiz girişte uyarı
                                </label>
                              </div>
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic3} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="outdoorChecked" value="Dış kapı önünde şüpheli durumda uyarı:Evet" />
                                  Dış kapı önünde şüpheli durumda uyarı
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div role="group" className="mt-4" aria-labelledby="checkbox-group">
                        <div class="card">
                          <div class="card-body">
                            <p class="card-text mb-3" >İç Alanınızda Uygulamak İstediğiniz Bir Alarm İhtiyacı Var mı? <span style={{ color: "red" }}>*</span></p>
                            <div className="row">
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic4} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="indoorChecked" value="Çalışma saatleri dışında şüpheli bir kişi iş yerine girdiğinde:Evet" />
                                  Çalışma saatleri dışında şüpheli bir kişi iş yerine girdiğinde
                                </label>
                              </div>
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic5} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="indoorChecked" value="Günün her saati, yönetim odası, depo, muhasebe gibi bir odamıza bir kişi girdiğinde:Evet" />
                                  Günün her saati, yönetim odası, depo, muhasebe gibi özel bir alana bir kişi girdiğinde
                                </label>
                              </div>
                              <div class="col-md-4">
                                <div className="card">
                                  <img src={pic6} class="card-img-top" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="indoorChecked" value="Günün her saati, ortak çalışma alanlarında yetkili bir kişinin olmaması durumu:Evet" />
                                  Günün her saati, ortak çalışma alanlarında yetkili bir kişinin olmaması durumu
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mt-4">
                        <div class="card-body">
                          <p class="card-text">Bu noktalarda kameralar mevcut mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                          <Field as="textarea" id="topic" name="freeText" className="form-control" rows="3"></Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" onClick={visibleToBack3} style={{ marginRight: "5px" }}>Geri</button>
                    <button type="button" class="btn btn-primary" onClick={() => visibleToNext3(values)}>İleri</button>
                  </div>
                </div>

                <div class={`card mt-3 mb-3 pagetext ${page4Visible ? 'visible' : 'd-none'}`}>
                  <div class="card-header">
                  Eyedius Değer Analiz Formu'na Hoş geldiniz.<br/>
                    3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                  </div>
                  <div class="card-body">
                    <div className="scrollable">
                      <div role="group" aria-labelledby="checkbox-group">
                        <div class="card">
                          <div class="card-header">
                            Tasarruf Kontrolleri
                          </div>
                          <div class="card-body">

                            <p class="card-text mb-3" >İş Yerinizden Çıkar Çıkmaz, Aşağıdakilerden Hangilerinin Kapalı Olduğuna Emin Olmak İstersiniz?</p>
                            <div className="row">
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic7} class="card-img-top resim" height="150" width="90" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Kapılar:Evet" />
                                  Kapılar 
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic8} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Pencereler:Evet" />
                                  Pencereler 
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic9} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Kombi:Evet" />
                                  Kombi
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic10} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Kettle ve Benzeri Mutfak Araçları:Evet" />
                                  Kettle ve Benzeri Mutfak Araçları
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic11} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Elektrikli Isıtıcılar:Evet" />
                                  Elektrikli Isıtıcılar
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic12} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Klima:Evet" />
                                  Klima
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic13} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Hava Perdesi:Evet" />
                                  Hava Perdesi
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic14} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="tasarufChecked" value="Işıklar:Evet" />
                                  Işıklar
                                </label>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>



                      <div class="card mt-4">
                        <div class="card-body">
                          <p class="card-text">Bu cihazları kameralar görüyor mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                          <Field as="textarea" id="topic" name="freeText2" className="form-control" rows="3"></Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" onClick={visibleToBack2} style={{ marginRight: "5px" }}>Geri</button>
                    <button type="button" class="btn btn-primary" onClick={visibleToNext4}>İleri</button>
                  </div>
                </div>

                <div class={`card mt-3 mb-3 pagetext ${page5Visible ? 'visible' : 'd-none'}`}>
                  <div class="card-header">
                  Eyedius Değer Analiz Formu'na Hoş geldiniz.<br/>
                    3 Adımda İşyeriniz için Güvenlik ve Tasarruf Anlamında Sağlayabileceğimiz Değerleri Öğrenin.
                  </div>
                  <div class="card-body">
                    <div className="scrollable">
                      <div role="group" aria-labelledby="checkbox-group">
                        <div class="card">
                          <div class="card-header">
                            Özel Tasarruf Kontrolleri
                          </div>
                          <div class="card-body">

                            <p class="card-text mb-3" >İş Yerinizde Sürekli Kontrol Edilmesini İstediğiniz Özel Durumlar Var mı?</p>
                            <div className="row">
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic15} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Sizin İçin Değerli Nesne(ler)in Yerinden Alınması:Evet" />
                                  Sizin İçin Değerli Nesne(ler)in Yerinden Alınması
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic16} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Elektrikli Isıtıcı & İnsan Entegre Kontrolü:Evet" />
                                  Elektrikli Isıtıcı & İnsan Entegre Kontrolü
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic17} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Hava Perdesi & Kapı Entegre Kontrolü:Evet" />
                                  Hava Perdesi & Kapı Entegre Kontrolü
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic18} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Klima & Kapı-Pencere Verimsizlik Uyarısı:Evet" />
                                  Klima & Kapı-Pencere Verimsizlik Uyarısı
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic19} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Dondurucunun Kapağı & Dolabı Açık Kalması:Evet" />
                                  Dondurucunun Kapağı & Dolabın Açık Kalması
                                </label>
                              </div>
                              <div class="col-md-6">
                                <div className="card">
                                  <img src={pic20} class="card-img-top resim" height="150" />
                                </div>
                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Dondurucunun Aniden Kapanması:Evet" />
                                  Dondurucunun Aniden Kapanması
                                </label>
                              </div>
                              <div class="col-md-6">

                                <label>
                                  <Field className="form-check-input" type="checkbox" name="specialTasarufChecked" value="Diğer:Evet" />
                                  Diğer
                                </label>
                                <div className="card">
                                  <Field as="textarea" id="topic" name="freeText3" className="form-control" rows="1"></Field>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card mt-4">
                        <div class="card-body">
                          <p class="card-text">Bu cihazları kameralar görüyor mu? Kamera sayısı ve model bilgisi hakkında bilgi veriniz. Varsa potansiyel kurulum zorluklarını yazınız.</p>
                          <Field as="textarea" id="topic" name="freeText4" className="form-control" rows="3"></Field>
                        </div>
                      </div>
                    </div>

                  </div>



                  <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" onClick={refreshPage} style={{ marginRight: "5px" }}>Başa dön</button>

                    <button type="button" class="btn btn-primary" onClick={visibleToBack1} style={{ marginRight: "5px" }}>Geri</button>

                    <button type="submit" class="btn btn-primary">Kaydet</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>

    </div >
  );
}

export default App;
