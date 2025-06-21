export interface IFieldConfig {
    name: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea' | 'password';
    required?: boolean;
    options?: { value: string; label: string }[] | string[];
    placeholder?: string;
    colSpan?: number; // 1 o 2, por ejemplo
    widthClass?: string; // Ejemplo: 'col-span-2' o 'w-full md:w-1/2'
}