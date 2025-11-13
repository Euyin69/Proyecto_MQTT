const json = {
    "head": {
        "transaction": 0,
        "signature": 10290,
        "environment": {
            "station_name": "logger_de_taller",
            "table_name": "minutal",
            "model": "CR1000X",
            "serial_no": "37310",
            "os_version": "CR1000X.8.2.1",
            "prog_name": "CPU:JSONtest.CR1X"
        },
        "fields": [
            {
                "name": "T",
                "type": "xsd:float",
                "process": "Avg",
                "settable": false
            },
            {
                "name": "RH",
                "type": "xsd:float",
                "process": "Avg",
                "settable": false
            }
        ]
    },
    "data": [
        {
            "time": "2025-05-19T07:17:00",
            "vals": [
                22.47,
                45.5
            ]
        },
        {
            "time": "2025-05-19T07:18:00",
            "vals": [
                23.47,
                46.5
            ]
        }
    ]
}
console.log(json.data.length);//de aquí saco cuantos registros ha recuperado la petición al broker MQTT (si el datalogger no ha podido enviar cada minuto los datos se habrán acumulado más de 1 minutos de datos)
let datos = [];//creo un array vacío donde guardaré los valores que genera el registro minutal
for (let r = 0; r < json.data.length; r++){//este for recorre todos los registros en el JSON. Si hay varios registros los añadira con su timestamp y sus valores
  datos[r] = [Object.values(json.data[r])[0]];//inserta el valor del timestamp en el primer campo del array
  datos[r].push(Object.values(json.head.environment)[0]);
  for (let v = 0; v < json.head.fields.length; v++){//este for va añadiendo los valores guardados en el registro después del timestamp
    datos[r].push(""+Object.values(json.data[r])[1][v]);
  }
}
console.log(datos[0]);// Array ["2025-05-19T07:17:00", "logger_de_taller", "22.47", "45.5"]
console.log(datos[1]);// Array ["2025-05-19T07:18:00", "logger_de_taller", "23.47", "46.5"]
console.log(datos);// Array [Array ["2025-05-19T07:17:00", "logger_de_taller", "22.47", "45.5"], Array ["2025-05-19T07:18:00", "logger_de_taller", "23.47", "46.5"]]