using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Structures.Items
{
    [System.Serializable]
    public class Inventory {
        public Slot[] Slots = 
            new Slot[Inventory.Length];
        static readonly int Length = 28;
        public void AddItem(Item item, int qty)
        {
            foreach(var Space in Slots)
            {
                if(Space.Item == item)
                {
                    Space.Amount += qty;
                    return;
                }
            }
        }
    }
    [System.Serializable]
    public class Slot {
        public Item Item;
        public int Amount;
    }
    public class Item
    {
        static readonly Item Self;
        readonly bool Stacks = true;
        readonly string Examine;
        readonly string Name;
        readonly int ID;
        public void Use(Item trgt) {}
        public override bool Equals(Object obj) {
        if (obj == null || !(obj is Item))
            return false; else
        return this.ID == ((Item) obj).ID;
        }
        public override int GetHashCode()
        {
            return ID;
        }
        public override string ToString()
        {
            return Name;
        }

    }
}