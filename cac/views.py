from pyramid.view import view_config

@view_config(context='cac:resources.Root',
             renderer='cac:templates/base.pt')
def home(request):
    return dict()

@view_config(name='about',
			 context='cac:resources.Root',
             renderer='cac:templates/about.pt')
def about(request):
    return dict()

@view_config(name='contact',
			 context='cac:resources.Root',
             renderer='cac:templates/contact.pt')
def contact(request):
    return dict()
