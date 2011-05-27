from pyramid.view import view_config

@view_config(context='cac:resources.Root',
             renderer='cac:templates/base.pt')
def home(request):
    return dict()
