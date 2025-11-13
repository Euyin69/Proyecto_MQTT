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
console.log(json.head.fields.length);//de aquí saco cuantas variables genera el registro minutal (temperatura y humedad)
//const campos={};
const variables = [];//creo un array vacío donde guardaré el nombre de las variables que genera el registro minutal
for (let i = 0; i < json.head.fields.length; i++){
//  campos[i]=json.head.fields[i];
  variables.push(Object.values(json.head.fields[i])[0]);
//  let obj1 = Object.values(campos[0]);
//  let obj2 = Object.values(campos[1]);
}
//console.log(campos);
//let obj1 = Object.values(campos[0]);
//let obj2 = Object.values(campos[1]);
//let var1 = Object.values(campos[0])[0];
//let var2 = Object.values(campos[1])[0];
//console.log(var1);
//console.log(var2);
//let variables = [Object.values(campos[0])[0],Object.values(campos[1])[0]];
console.log(variables);