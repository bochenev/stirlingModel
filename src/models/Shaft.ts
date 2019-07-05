
// Шток поршня
export interface Shaft {
    material?: string;
    heatCapacity?: number;          //  теплоемкость, J/K (Дж/К)
    specificHeatCapacity: number;   //  удельная теплоемкомть, J / kg*K (Дж / кг*К)
    diameter?: number;              //  Диаметр, m (м)
}
