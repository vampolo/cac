from pyramid.view import view_config

@view_config(context='cac:resources.Root',
             renderer='cac:templates/base.pt')
@view_config(name='about',
			 context='cac:resources.Root',
             renderer='cac:templates/about.pt')
@view_config(name='where',
			 context='cac:resources.Root',
             renderer='cac:templates/where.pt')
@view_config(name='contact_us',
			 context='cac:resources.Root',
             renderer='cac:templates/contact.pt')
@view_config(name='test_udito',
			 context='cac:resources.Root',
             renderer='cac:templates/survey.pt')
@view_config(name='come_funziona_udito',
			 context='cac:resources.Root',
             renderer='cac:templates/come_funziona_ludito.pt')
@view_config(name='ipoacusia',
			 context='cac:resources.Root',
             renderer='cac:templates/ipoacusia.pt')
@view_config(name='il_nostro_aiuto',
			 context='cac:resources.Root',
             renderer='cac:templates/il_nostro_aiuto.pt')
@view_config(name='apparecchi_ad_occhiale',
			 context='cac:resources.Root',
             renderer='cac:templates/apparecchi_ad_occhiale.pt')
@view_config(name='apparecchi_retroauricolare',
			 context='cac:resources.Root',
             renderer='cac:templates/apparecchi_retroauricolare.pt')
@view_config(name='apparecchi_ricevitore_nel_canale',
			 context='cac:resources.Root',
             renderer='cac:templates/apparecchi_ricevitore_nel_canale.pt')
@view_config(name='apparecchi_endoauricolare',
			 context='cac:resources.Root',
             renderer='cac:templates/apparecchi_endoauricolare.pt')
@view_config(name='acufeni',
             context='cac:resources.Root',
             renderer='cac:templates/acufeni.pt')
def home(request):
    return dict()

