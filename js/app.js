$(() => {
  $("#bildirim").on("click", () => {
    Push.create("Yeni Bildirim!", {
      body: "Bildirim İçeriği...",
      timeout: 5000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  });
  $.getJSON("https://freegeoip.app/json/", function (ip_data) {
    var ip = ip_data["ip"];
    $("#ip").html(ip);
    $("#ipsehir").html(ip_data["region_name"]);
    $("#ipulke").html(ip_data["country_name"] + ", " + ip_data["country_code"]);
    var ip_sehir = ip_data["region_name"];
    var k_sehir = ip_sehir.toLowerCase();
    $.getJSON("https://api.genelpara.com/embed/doviz.json", function (data) {
      var dolar_satis = data["USD"]["satis"] + " TL";
      var euro_satis = data["EUR"]["satis"] + " TL";
      $("#dolar").html(dolar_satis);
      $("#euro").html(euro_satis);
      setInterval(() => {
        Push.create("Dolar: " + dolar_satis, {
          body: "Euro: " + euro_satis,
          timeout: 5000,
          onClick: function () {
            window.focus();
            this.close();
          },
        });
      }, 300000);
    })
      .done(function () {
        //Döviz Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Döviz HATA!
      })
      .always(function () {
        //Döviz İşlem Sonlandı!
      });
    $.getJSON("https://api.genelpara.com/embed/kripto.json", function (data) {
      var btc = data["BTC"]["satis"] + " $";
      var eth = data["ETH"]["satis"] + " $";
      $("#btc").html(btc);
      $("#eth").html(eth);
    })
      .done(function () {
        //Kripto Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Kripto HATA!
      })
      .always(function () {
        //Kripto İşlem Sonlandı!
      });
    $.getJSON("https://api.genelpara.com/embed/altin.json", function (data) {
      var gram = data["GA"]["satis"] + " TL";
      var ceyrek = data["C"]["satis"] + " TL";
      var yarim = data["Y"]["satis"] + " TL";
      $("#gram").html(gram);
      $("#ceyrek").html(ceyrek);
      $("#yarim").html(yarim);
    })
      .done(function () {
        //Altın Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Altın HATA!
      })
      .always(function () {
        //Altın İşlem Sonlandı!
      });
    $.getJSON(
      "https://api.genelpara.com/embed/hava-durumu.json",
      function (data) {
        var hava = data[k_sehir]["hava"];
        var sicaklik = data[k_sehir]["sicaklik"];
        $("#sehir").html(ip_sehir);
        $("#hava").html(hava);
        $("#sic").html(sicaklik);
      }
    )
      .done(function () {
        //Hava Durumu Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Hava Durumu HATA!
      })
      .always(function () {
        //Hava Durumu İşlem Sonlandı!
      });
    $.getJSON("https://api.genelpara.com/embed/korona.json", function (data) {
      var tarih = data["korona"]["tarih"];
      var test = data["korona"]["gunluk_test"];
      var vaka = data["korona"]["gunluk_vaka"];
      var iyilesen = data["korona"]["gunluk_iyilesen"];
      var vefat = data["korona"]["gunluk_vefat"];
      $("#korona_tarih").html(tarih);
      $("#test").html(test);
      $("#vaka").html(vaka);
      $("#iyilesen").html(iyilesen);
      $("#vefat").html(vefat);
    })
      .done(function () {
        //Korona Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Korona HATA!
      })
      .always(function () {
        //Korona İşlem Sonlandı!
      });
    $.getJSON(
      "https://api.genelpara.com/embed/namaz-vakit.json",
      function (data) {
        var imsak = data[k_sehir]["imsak"];
        var gunes = data[k_sehir]["gunes"];
        var ogle = data[k_sehir]["ogle"];
        var ikindi = data[k_sehir]["ikindi"];
        var aksam = data[k_sehir]["aksam"];
        var yatsi = data[k_sehir]["yatsi"];
        $("#imsak").html(imsak);
        $("#gunes").html(gunes);
        $("#ogle").html(ogle);
        $("#ikindi").html(ikindi);
        $("#aksam").html(aksam);
        $("#yatsi").html(yatsi);
        $("#nsehir").html(ip_sehir);
      }
    )
      .done(function () {
        //Namaz Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //Namaz HATA!
      })
      .always(function () {
        //Namaz İşlem Sonlandı!
      });
  })
    .done(function () {
      $("#loading").css("display", "none");
      setInterval(() => {
        $("#lp").css("display","block");
      }, 10000);
    })
    .fail(function (jqxhr) {
      console.log(jqxhr);
    })
    .always(function () {});
  var interval = 0;
  setInterval(function () {
    interval++;
    $("#yen").html(interval);
    $("#myen").html(interval);

    $.getJSON("https://freegeoip.app/json/", function (ip_data) {
      var ip = ip_data["ip"];
      $("#ip").html(ip);
      $("#ipsehir").html(ip_data["region_name"]);
      $("#ipulke").html(
        ip_data["country_name"] + ", " + ip_data["country_code"]
      );
      var ip_sehir = ip_data["region_name"];
      var k_sehir = ip_sehir.toLowerCase();
      $.getJSON("https://api.genelpara.com/embed/doviz.json", function (data) {
        var dolar_satis = data["USD"]["satis"] + " TL";
        var euro_satis = data["EUR"]["satis"] + " TL";
        $("#dolar").html(dolar_satis);
        $("#euro").html(euro_satis);
      })
        .done(function () {
          //Döviz Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Döviz HATA!
        })
        .always(function () {
          //Döviz İşlem Sonlandı!
        });
      $.getJSON("https://api.genelpara.com/embed/kripto.json", function (data) {
        var btc = data["BTC"]["satis"] + " $";
        var eth = data["ETH"]["satis"] + " $";
        $("#btc").html(btc);
        $("#eth").html(eth);
      })
        .done(function () {
          //Kripto Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Kripto HATA!
        })
        .always(function () {
          //Kripto İşlem Sonlandı!
        });
      $.getJSON("https://api.genelpara.com/embed/altin.json", function (data) {
        var gram = data["GA"]["satis"] + " TL";
        var ceyrek = data["C"]["satis"] + " TL";
        var yarim = data["Y"]["satis"] + " TL";
        $("#gram").html(gram);
        $("#ceyrek").html(ceyrek);
        $("#yarim").html(yarim);
      })
        .done(function () {
          //Altın Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Altın HATA!
        })
        .always(function () {
          //Altın İşlem Sonlandı!
        });
      $.getJSON(
        "https://api.genelpara.com/embed/hava-durumu.json",
        function (data) {
          var hava = data[k_sehir]["hava"];
          var sicaklik = data[k_sehir]["sicaklik"];
          $("#sehir").html(ip_sehir);
          $("#hava").html(hava);
          $("#sic").html(sicaklik);
        }
      )
        .done(function () {
          //Hava Durumu Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Hava Durumu HATA!
        })
        .always(function () {
          //Hava Durumu İşlem Sonlandı!
        });
      $.getJSON("https://api.genelpara.com/embed/korona.json", function (data) {
        var tarih = data["korona"]["tarih"];
        var test = data["korona"]["gunluk_test"];
        var vaka = data["korona"]["gunluk_vaka"];
        var iyilesen = data["korona"]["gunluk_iyilesen"];
        var vefat = data["korona"]["gunluk_vefat"];
        $("#korona_tarih").html(tarih);
        $("#test").html(test);
        $("#vaka").html(vaka);
        $("#iyilesen").html(iyilesen);
        $("#vefat").html(vefat);
      })
        .done(function () {
          //Korona Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Korona HATA!
        })
        .always(function () {
          //Korona İşlem Sonlandı!
        });
      $.getJSON(
        "https://api.genelpara.com/embed/namaz-vakit.json",
        function (data) {
          var imsak = data[k_sehir]["imsak"];
          var gunes = data[k_sehir]["gunes"];
          var ogle = data[k_sehir]["ogle"];
          var ikindi = data[k_sehir]["ikindi"];
          var aksam = data[k_sehir]["aksam"];
          var yatsi = data[k_sehir]["yatsi"];
          $("#imsak").html(imsak);
          $("#gunes").html(gunes);
          $("#ogle").html(ogle);
          $("#ikindi").html(ikindi);
          $("#aksam").html(aksam);
          $("#yatsi").html(yatsi);
          $("#nsehir").html(ip_sehir);
        }
      )
        .done(function () {
          //Namaz Json Geldi Başarılı!
        })
        .fail(function (jqxhr) {
          console.log(jqxhr);
          //Namaz HATA!
        })
        .always(function () {
          //Namaz İşlem Sonlandı!
        });
    })
      .done(function () {
        //İP ADRESİ Json Geldi Başarılı!
      })
      .fail(function (jqxhr) {
        console.log(jqxhr);
        //İP ADRESİ HATA!
      })
      .always(function () {
        //İP ADRESİ İşlem Sonlandı!
      });
  }, 30000);

  alphabet = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
  );
  letter_count = 0;
  el = $("#h1");
  word = el.html().trim();
  finished = false;

  el.html("");
  for (var i = 0; i < word.length; i++) {
    el.append("<span class='h1span'>" + word.charAt(i) + "</span>");
  }

  setTimeout(write, 75);
  incrementer = setTimeout(inc, 1000);

  function write() {
    for (var i = letter_count; i < word.length; i++) {
      var c = Math.floor(Math.random() * 36);
      $(".h1span")[i].innerHTML = alphabet[c];
    }
    if (!finished) {
      setTimeout(write, 75);
    }
  }

  function inc() {
    $(".h1span")[letter_count].innerHTML = word[letter_count];
    $(".h1span:eq(" + letter_count + ")").addClass("glow");
    letter_count++;
    if (letter_count >= word.length) {
      finished = true;
    } else {
      setTimeout(inc, 500);
    }
  }

  setInterval(() => {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var tarih =
      dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    var gun = dt.getDay();
    $("#saat").html(time);
    $("#tarih").html(tarih);

    if (gun == 1) {
      $("#gun").html("Pazartesi");
    } else if (gun == 2) {
      $("#gun").html("Salı");
    } else if (gun == 3) {
      $("#gun").html("Çarşamba");
    } else if (gun == 4) {
      $("#gun").html("Perşembe");
    } else if (gun == 5) {
      $("#gun").html("Cuma");
    } else if (gun == 6) {
      $("#gun").html("Cumartesi");
    } else if (gun == 7) {
      $("#gun").html("Pazar");
    } else {
      $("#gun").html("HATA!");
    }
  }, 1000);

  $("#menu_btn").on("click", () => {
    $(".ayarlar").css("display", "block");
  });
  $("#close_btn").on("click", () => {
    $(".ayarlar").css("display", "none");
  });
  $(".menu-bg").on("click", () => {
    $(".ayarlar").css("display", "none");
  });

  $("#menu_btn2").on("click", () => {
    $(".ayarlar").css("display", "block");
  });
  $("#close_btn").on("click", () => {
    $(".ayarlar").css("display", "none");
  });
  $(".menu-bg").on("click", () => {
    $(".ayarlar").css("display", "none");
  });

  $("#ip_gizle").change(function () {
    if ($(this).prop("checked") == true) {
      $("#ip_h4").css("display", "none");
    } else if ($(this).prop("checked") == false) {
      $("#ip_h4").css("display", "block");
    }
  });

  $("#img_gizle").change(function () {
    if ($(this).prop("checked") == true) {
      $("img").css("display", "none");
    } else if ($(this).prop("checked") == false) {
      $("img").css("display", "block");
    }
  });

  $("#yen_gizle").change(function () {
    if ($(this).prop("checked") == true) {
      $("#yen_gosterge").css("display", "none");
    } else if ($(this).prop("checked") == false) {
      $("#yen_gosterge").css("display", "block");
    }
  });

  $("#ip_bilgi_gizle").change(function () {
    if ($(this).prop("checked") == true) {
      $(".rbox:nth-child(1)").css("display", "none");
    } else if ($(this).prop("checked") == false) {
      $(".rbox:nth-child(1)").css("display", "flex");
    }
  });

  $("#zaman_gizle").change(function () {
    if ($(this).prop("checked") == true) {
      $(".rbox:nth-child(2)").css("display", "none");
    } else if ($(this).prop("checked") == false) {
      $(".rbox:nth-child(2)").css("display", "flex");
    }
  });
});
