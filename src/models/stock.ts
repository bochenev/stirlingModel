
// Шток поршня
export interface Stock {
    material?: string;
    heatCapacity?: number;          //  теплоемкость, J/K (Дж/К)
    specificHeatCapacity: number;   //  удельная теплоемкомть, J / kg*K (Дж / кг*К)
    diameter?: number;              //  Диаметр, m (м)
}
