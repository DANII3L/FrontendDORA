import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../shared/components/ui/Card';
import { 
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Share2,
  Eye,
  Lock,
  Unlock,
  FolderOpen,
  File,
  Image,
  FileVideo,
  FileAudio
} from 'lucide-react';

const Documentos: React.FC = () => {
  const documentos = [
    {
      id: 1,
      nombre: "Contrato de Servicios.pdf",
      tipo: "PDF",
      tamaño: "2.4 MB",
      fecha: "2024-01-15",
      estado: "Público",
      icon: FileText,
      color: "text-red-600"
    },
    {
      id: 2,
      nombre: "Presentación Empresarial.pptx",
      tipo: "PPTX",
      tamaño: "15.7 MB",
      fecha: "2024-01-14",
      estado: "Privado",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      id: 3,
      nombre: "Logo Empresa.png",
      tipo: "PNG",
      tamaño: "1.2 MB",
      fecha: "2024-01-13",
      estado: "Público",
      icon: Image,
      color: "text-green-600"
    },
    {
      id: 4,
      nombre: "Video Promocional.mp4",
      tipo: "MP4",
      tamaño: "45.2 MB",
      fecha: "2024-01-12",
      estado: "Privado",
      icon: FileVideo,
      color: "text-purple-600"
    },
    {
      id: 5,
      nombre: "Plantilla Factura.docx",
      tipo: "DOCX",
      tamaño: "3.1 MB",
      fecha: "2024-01-11",
      estado: "Público",
      icon: FileText,
      color: "text-blue-600"
    }
  ];

  const plantillas = [
    {
      id: 1,
      nombre: "Factura Estándar",
      categoria: "Facturación",
      descripcion: "Plantilla para facturas comerciales",
      icon: FileText
    },
    {
      id: 2,
      nombre: "Contrato de Servicios",
      categoria: "Legal",
      descripcion: "Contrato base para servicios",
      icon: FileText
    },
    {
      id: 3,
      nombre: "Propuesta Comercial",
      categoria: "Ventas",
      descripcion: "Plantilla para propuestas",
      icon: FileText
    }
  ];

  const metricas = [
    {
      titulo: "Documentos Totales",
      valor: "1,234",
      cambio: "+15%",
      tendencia: "up"
    },
    {
      titulo: "Espacio Usado",
      valor: "2.4 GB",
      cambio: "+8%",
      tendencia: "up"
    },
    {
      titulo: "Compartidos",
      valor: "89",
      cambio: "+25%",
      tendencia: "up"
    },
    {
      titulo: "Plantillas",
      valor: "23",
      cambio: "+12%",
      tendencia: "up"
    }
  ];

  const getFileIcon = (tipo: string) => {
    switch (tipo) {
      case 'PDF': return FileText;
      case 'DOCX': return FileText;
      case 'PPTX': return FileText;
      case 'PNG': return Image;
      case 'JPG': return Image;
      case 'MP4': return FileVideo;
      case 'MP3': return FileAudio;
      default: return File;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gestión de Documentos</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Organiza y gestiona todos tus documentos empresariales
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            Subir Documento
          </button>
        </div>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {metrica.titulo}
              </CardTitle>
              <FileText className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {metrica.valor}
              </div>
              <div className="flex items-center text-xs mt-1">
                <span className="text-green-600">
                  {metrica.cambio}
                </span>
                <span className="text-gray-500 ml-1">vs mes anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documentos Recientes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Documentos Recientes</span>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-1 border border-gray-300 rounded text-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                <option>Todos los tipos</option>
                <option>PDF</option>
                <option>DOCX</option>
                <option>PPTX</option>
                <option>Imágenes</option>
                <option>Videos</option>
              </select>
              <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documentos.map((documento) => {
              const FileIcon = getFileIcon(documento.tipo);
              return (
                <div key={documento.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-700`}>
                      <FileIcon className={`h-5 w-5 ${documento.color}`} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{documento.nombre}</h3>
                      <p className="text-sm text-gray-500">{documento.tipo} • {documento.tamaño} • {documento.fecha}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                      documento.estado === "Público" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                    }`}>
                      {documento.estado === "Público" ? (
                        <Unlock className="h-3 w-3 mr-1" />
                      ) : (
                        <Lock className="h-3 w-3 mr-1" />
                      )}
                      {documento.estado}
                    </span>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Plantillas y Carpetas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Plantillas Disponibles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {plantillas.map((plantilla) => (
                <div key={plantilla.id} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <plantilla.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{plantilla.nombre}</p>
                      <p className="text-sm text-gray-500">{plantilla.categoria} • {plantilla.descripcion}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Usar
                  </button>
                </div>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center">
                <Plus className="h-4 w-4 mr-2" />
                Crear Nueva Plantilla
              </button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FolderOpen className="h-5 w-5 mr-2 text-green-600" />
              Carpetas Organizadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FolderOpen className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900 dark:text-green-100">Facturación</p>
                    <p className="text-sm text-green-600 dark:text-green-300">45 documentos</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                  Abrir
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FolderOpen className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900 dark:text-blue-100">Contratos</p>
                    <p className="text-sm text-blue-600 dark:text-blue-300">23 documentos</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                  Abrir
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FolderOpen className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-900 dark:text-purple-100">Marketing</p>
                    <p className="text-sm text-purple-600 dark:text-purple-300">67 documentos</p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
                  Abrir
                </button>
              </div>
              <button className="w-full p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Carpeta
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentos; 