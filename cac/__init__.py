from pyramid.config import Configurator
from pyramid.events import BeforeRender
from pyramid.renderers import get_renderer
from cac.resources import Root
import helpers

def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    config = Configurator(root_factory=Root, settings=settings)
    config.add_subscriber(add_renderer_globals, BeforeRender)
    config.add_static_view('static', 'cac:static')
    config.add_static_view('images', 'cac:static/images')
    config.add_static_view('example', 'cac:static/example')
    config.scan()
    return config.make_wsgi_app()

def add_renderer_globals(event):
	event.update({'base': get_renderer('templates/base.pt').implementation()})
	event.update({'h': helpers})
