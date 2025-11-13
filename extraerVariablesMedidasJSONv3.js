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
            "time": "2025-05-19T08:06:00",
            "vals": [
                22.6,
                49.39
            ]
        }
    ]
}
//json.head.fields.length //EXPRESION PARA SABER CUANTAS VARIABLES ME GENERA EL REGISTRO MINUTAL (en este caso temperatura y humedad)
const variables = [];//creo un array vacío donde guardaré el nombre de las variables que genera el registro minutal
//variables.push(Object.values(json.head.environment)[1]);
variables.push("timestamp","station_name");
for (let i = 0; i < json.head.fields.length; i++)//este for recorre el array del json "fields" y rellena mi array con todos los nombres de las variables que genera el registro minutal
	{
  variables.push(Object.values(json.head.fields[i])[0]);
	}
const EMA = Object.values(json.head.environment)[0];
console.log(variables);// Array ["timestamp", "station_name", "T", "RH"]