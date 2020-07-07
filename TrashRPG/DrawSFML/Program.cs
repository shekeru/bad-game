using SFML.Graphics;
using SFML.System;
using SFML.Window;
using System;

namespace DrawSFML
{
    class Program
    {
        RenderWindow _window;
        static void Main(string[] args)
        {
            new Program();
        }
        Program() {
            _window = new RenderWindow(new VideoMode(800, 600), "TrashRPG");
            _window.Closed += new EventHandler(OnClosed); _window.SetVisible(true);
            Font f = new Font("C:\\Windows\\Fonts\\cour.TTF");
            Text t = new Text("Hello World", f);
            t.Position = new Vector2f(5, 4);
            t.FillColor = Color.Black;
            t.CharacterSize = 11;
            while (_window.IsOpen)
            {
                _window.DispatchEvents();
                _window.Clear(Color.White);
                _window.Draw(t);
                _window.Display();
            };
        }
        void OnClosed(object sender, EventArgs e)
        {
            _window.Close();
        }
    }
}
