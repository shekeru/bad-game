using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Structures.Items
{
    class Potion : Item
    {
        static Potion Self = new Potion();
        string Examine = "Heals for 75 HP.";
        string Name = "Health Potion (I)";
        int ID = 1;
    }
}
