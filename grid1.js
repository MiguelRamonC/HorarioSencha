Ext.require(['Ext.plugin.Viewport']);
Ext.onReady(function(){
	
	Ext.create('Ext.data.Store', {   
    storeId: 'datosTabla', 
    fields:[ 'Materia','Grupo','Profesor', 'Lunes', 'Martes','Miércoles','Jueves','Viernes'], 
    data: [ 
        { materia: 'Aplicaciones Enriquecidas de Internet',grupo:'7gAC' ,profesor:'MONICA RUIZ MARTINEZ',lunes: '8:00 a 9:00',martes: '8:00 a 9:00',miercoles: '8:00 a 9:00',jueves: '8:00 a 9:00',viernes: '8:00 a 9:00' },
		{ materia: 'Lenguajes y autómatas II',grupo:'7g1A' ,profesor:'ROSSANA GRACIELA TREJO PACHECO',lunes: '9:00 a 10:00',martes: '9:00 a 10:00',miercoles: '9:00 a 10:00',jueves: '9:00 a 10:00',viernes: '9:00 a 10:00' },
        { materia: 'Taller de Investigación I',grupo:'7g3A' ,profesor:'MARMOL ENRIQUE SANTOS QUINTERO',lunes: '10:00 a 11:00',martes: '10:00 a 11:00',miercoles: '10:00 a 11:00',jueves: '10:00 a 11:00'},
        { materia: 'Conmutación y enrutamiento de redes de datos',grupo:'7g2C' ,profesor:'JOSE ALBERTO VENEGAS GARCIA',lunes: '11:00 a 12:00',martes: '11:00 a 12:00',miercoles: '11:00 a 12:00',jueves: '11:00 a 12:00',viernes: '11:00 a 12:00' },
        { materia: 'Arquitectura de software para la Web',grupo:'7gBC' ,profesor:'ALMA IVONNE SANCHEZ GARCIA',lunes: '12:00 a 1:00',martes: '12:00 a 1:00',miercoles: '12:00 a 1:00',jueves: '12:00 a 1:00',viernes: '12:00 a 1:00' },
        { materia: 'Programación lógica y funcional',grupo:'7g4B' ,profesor:'RAFAEL HERRERA GARCIA',lunes: '1:00 a 2:00',martes: '1:00 a 2:00',miercoles: '1:00 a 2:00',jueves: '1:00 a 2:00'},
        { materia: 'Sistemas programables',grupo:'7g7C' ,profesor:'RAFAEL HERRERA GARCIA',lunes: '2:00 a 3:00',martes: '2:00 a 3:00',miercoles: '2:00 a 3:00',jueves: '2:00 a 3:00' },

		]
	});
	

	Ext.create('Ext.grid.Panel', {
		title: 'Horario',
		store: Ext.data.StoreManager.lookup('datosTabla'),
		columns: [ 
			{ 
				text: 'Materia', 
				dataIndex: 'materia', 
				sortable: true, 
				hideable: true,
				flex: 4
			},
			{ 
				text: 'Grupo', 
				dataIndex: 'grupo', 
				sortable: true, 
				hideable: true,
				flex: 1
			},
			{ 
				text: 'Profesor', 
				dataIndex: 'profesor', 
				sortable: true, 
				hideable: true,
				flex: 3
			},
			{ 
				text: 'Lunes', 
				dataIndex: 'lunes', 
				sortable: true, 
				hideable: true,
				flex: 2
			},
			{ 
				text: 'Martes', 
				dataIndex: 'martes', 
				sortable: true, 
				hideable: true,
				flex: 2
			},
			{ 
				text: 'Miércoles', 
				dataIndex: 'miercoles', 
				sortable: true, 
				hideable: true,
				flex: 2
			},
			{ 
				text: 'Jueves', 
				dataIndex: 'jueves', 
				sortable: true, 
				hideable: true,
				flex: 2
			},
			{ 
				text: 'Viernes', 
				dataIndex: 'viernes', 
				sortable: true, 
				hideable: true,
				flex: 2
			},
		],
		
		height: 300,
		width: '100%',
		renderTo: Ext.getBody() 
	});
});
