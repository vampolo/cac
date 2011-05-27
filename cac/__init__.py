from pyramid.config import Configurator
from cac.resources import Root

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(root_factory=Root, settings=settings)
    config.add_view('cac.views.my_view',
                    context='cac:resources.Root',
                    renderer='cac:templates/mytemplate.pt')
    config.add_static_view('static', 'cac:static')
    return config.make_wsgi_app()

