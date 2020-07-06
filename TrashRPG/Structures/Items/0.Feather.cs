using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Structures.Items
{
    public class Feather : Item
    {
        static Feather Self = new Feather();
        string Examine = "Plucked from a chicken.";
        string Name = "Feather"; int ID = 0;
    }
}
