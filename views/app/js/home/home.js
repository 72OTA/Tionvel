  function calcular() {
    if ($('#numero').val().length == 0) {
        alert('Ingrese un numero');
        return false;
    }
    var fecha = $('#fecha').val();
    var numero = parseInt($('#numero').val());

    var fechaSeparada = fecha.split();

    var day = parseInt(fecha.substr(8, 2));
    var month = parseInt(fecha.substr(5, 7));
    var year = parseInt(fecha.substr(0, 4));
    // var sumar = fechaSeparada[];
    var resultado = day + numero;
    var dias;
    var meses;
    if (month % 2 == 0) {
      dias = 31;
    } else {
      dias = 30;
    }
    while (dias < resultado) {
      month++;
      resultado = resultado - dias;
      while (month > 12) {
        year++;
        month = month - 12;
      }

    }
    if (month < 10) {
      var monthFinal = '0' + month;
      month = monthFinal
    }
    if (resultado < 10) {
      var diaFinal = '0' + resultado;
      resultado = diaFinal;
    }
    var fecha = (resultado + '-' + month + '-' + year);
    var fechaRev = (year + '-' + month + '-' + resultado);
    var resp = $('<br><br><label></label><input type="text" name="input1" id="input1" value="' + fecha + '"  class="form-control animated fadeIn" disabled><br><hr>')
    var ciclo = $('#input1').length;
    if (ciclo == true) {
      $('#input1').val(fecha);
      var value = $('#input1').val();

    } else {
      $('#form1').append(resp);
    }
    var value = $('#input1').val();
    var divfun = $('<div class="col-md-3 animated fadeInUpBig" id="divfun"><form id="form1"><div class="form-group"><label for="fecha">Fecha</label><input type="date" class="form-control" id="fecha" MIN="' + fecha + '" value="' + fechaRev + '"></div><div class="form-group"><label for="numero">Numero</label><input type="number" class="form-control" id="numero" placeholder="ingrese un numero"></div><input type="button" class="btn btn-primary" value="Calcular" onClick="calcular()" id="btn1"></form></div>')
    $('#row').append(divfun);
    $('#btn1').attr('id', value);
    $('#' + value + '').attr('disabled', 'true');
    $('#numero').attr('id', value);
    $('#' + value + '').attr('disabled', 'true');
    $('#input1').attr('id', value);
    $('#' + value + '').attr('disabled', 'true');
    $('#form1').attr('id', value);
    $('#fecha').attr('id', value);
    $('#' + value + '').attr('disabled', 'true');

  }
