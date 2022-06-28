import socketserver
import sys


class MyTCPHandler(socketserver.BaseRequestHandler):
    """
    The request handler class for our server.

    It is instantiated once per connection to the server, and must
    override the handle() method to implement communication to the
    client.
    """

    def handle(self):
        # self.request is the TCP socket connected to the client
        self.data = self.request.recv(1024).strip()
        print("{} wrote:".format(self.client_address[0]))
        print(self.data)
        # just send back the same data, but upper-cased
        self.request.sendall(self.data.upper() + '\n')


class MyTCPHandlerStream(socketserver.StreamRequestHandler):

    def handle(self):
        # self.rfile is a file-like object created by the handler;
        # we can now use e.g. readline() instead of raw recv() calls
        self.data = self.rfile.readline().strip()
        print("{} wrote:".format(self.client_address[0]))
        print(self.data)
        # Likewise, self.wfile is a file-like object used to write back
        # to the client
        self.wfile.write(self.data.upper() + '\n')


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    # Create the server, binding to localhost on port 8085 according to option
    if len(sys.argv) > 1 and sys.argv[1] == 'stream':
        server = socketserver.ThreadingTCPServer(
            (HOST, PORT),
            MyTCPHandlerStream
        )
    else:
        server = socketserver.ThreadingTCPServer((HOST, PORT), MyTCPHandler)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()
        server.server_close()
        sys.exit(0)
