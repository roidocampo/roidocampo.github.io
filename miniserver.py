#!/usr/bin/env python

import SimpleHTTPServer
import SocketServer
import socket

HOST = socket.gethostbyname(socket.gethostname())
PORT = 8000

class MyTCPServer(SocketServer.TCPServer):
  def server_bind(self):
    self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    self.socket.bind(self.server_address)

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = MyTCPServer((HOST, PORT), Handler)

print "serving at %s:%s" % (HOST, PORT)
try:
  httpd.serve_forever()
except KeyboardInterrupt:
  print
except:
  raise
