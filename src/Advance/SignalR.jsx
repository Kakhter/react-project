import React from 'react';

const SignalR = () => {
    return (
        <>
            <div className="code_css">
                <h1> SignalR</h1>
                <pre>
                    <code> {`
        SignalR is a library for ASP.NET developers that simplifies the process of adding real-time web functionality to applications. 
        It allows server-side code to push content to clients instantly as it becomes available, rather than having the server wait for a client to request new data.

        -------------------------------------------------------------------------------------------------------
                                            SignalR **
        -------------------------------------------------------------------------------------------------------
        Create Hub Connection
        |
        v
        Register event handlers (connection.on)
        |
        v
        Start connection (connection.start)
        |
        v
        Invoke Hub methods (connection.invoke)
        |
        v
        Server processes request
        |
        v
        Server sends message back
        |
        v
        Client receives message in connection.on

        Image 1:
                Program.cs
                        builder.Services.AddSignalR();
                        …
                        app.MapHub<ChatHub>("/hubs/chat");


        Image 2:

                React Client:
                         

        Finally:

        Establish the connection
        Connection.on => receive message from Server (HUB) for “ReceiveMessage” function.
        Connection.Start=>
        Connection.invoke => Send message to the HUB using “SendMessage” method.




        `}
                    </code></pre>
            </div>

            Image-1: for SignalR<br />
            ChatHub.cs <br />
            <img src='/SignalR-1.jpg' alt='SignalR-1' width={800} height={400} />
            <br />
            Image-2: for SignalR<br />


            <img src='/SignalR-2.jpg' alt='SignalR-2' width={800} height={1000} />

            <br />
            <br />

        </>
    );
}
export default SignalR;