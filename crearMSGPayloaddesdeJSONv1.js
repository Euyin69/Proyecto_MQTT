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
let variables = ["timestamp","station_name"];//creo un array donde guardaré el nombre de las variables que genera el registro minutal. Las primeras siempre son el timestamp y el nombre de la estación
for (let i = 0; i < json.head.fields.length; i++){//este for recorre el array del json "fields" y rellena mi array con todos los nombres de las variables que genera el registro minutal
  variables.push(Object.values(json.head.fields[i])[0]);
}
let datos = [];//creo un array vacío donde guardaré los valores que genera el registro minutal
for (let r = 0; r < json.data.length; r++){//este for recorre todos los registros en el JSON. Si hay varios registros los añadira con su timestamp y sus valores
  datos[r] = [Object.values(json.data[r])[0]];//inserta el valor del timestamp en el primer campo del array
  datos[r].push(Object.values(json.head.environment)[0]);//inserta el nombre de la estación después del timestamp
  for (let v = 0; v < json.head.fields.length; v++){//este for recorre según el número de variables registradas. Si el datalogger guarda 2, 3, 4 o las que sean añadiendo los valores guardados en el registro después del timestamp
	datos[r].push(""+Object.values(json.data[r])[1][v]);//añado al array datos los valores guardados en el registro

  }
}
console.log(variables);// Array ["timestamp", "station_name", "T", "RH"]
console.log(datos[0]);// Array ["2025-05-19T07:17:00", "logger_de_taller", "22.47", "45.5"]
console.log(datos[1]);// Array ["2025-05-19T07:18:00", "logger_de_taller", "23.47", "46.5"]
console.log(datos);// Array [Array ["2025-05-19T07:17:00", "logger_de_taller", "22.47", "45.5"], Array ["2025-05-19T07:18:00", "logger_de_taller", "23.47", "46.5"]]