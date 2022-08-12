Ext.define('Plugin.cetera-labs.plugin-vi.Panel', {
    extend: 'Ext.form.Panel',

    bodyCls: 'x-window-body-default',        
    cls: 'x-window-body-default',
    style: 'border: none',
    border: false,
    padding: 10,

        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },

        items: [{
            xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
            items:[{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'First Name',
                    allowBlank: false,
                    name: 'first',
                    anchor:'95%',
                    value: 'Don'
                }, {
                    xtype:'textfield',
                    fieldLabel: 'Company',
                    name: 'company',
                    anchor:'95%'
                }]
            },{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Last Name',
                    allowBlank: false,
                    name: 'last',
                    anchor:'100%',
                    value: 'Griffin'
                },{
                    xtype:'textfield',
                    fieldLabel: 'Email',
                    allowBlank: false,
                    name: 'email',
                    vtype:'email',
                    anchor:'100%'
                }]
            }]
        }, {
            xtype: 'htmleditor',
            name: 'bio',
            fieldLabel: 'Biography',
            height: 200,
            anchor: '100%'
        }, 
        Ext.create('Cetera.grid.Abstract', {
            columns: [
                {text: "ID", width: 50, dataIndex: 'id'},
                {text: _("Название"),  flex: 1, dataIndex: 'name'}
            ],
            
            store: Ext.create('Ext.data.JsonStore',{
                fields: ['id','name'],
                proxy: {
                    type: 'ajax',
                    url: '/plugins/cetera-labs.plugin-dummy/data.php'
                },
                autoSync: true,
                autoLoad: true
            })          
        })
        ],
        buttons: [{
            text: 'Save',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]		
	
});